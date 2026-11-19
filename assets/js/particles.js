(function () {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return;

  const root = document.documentElement;
  const motion = window.matchMedia("screen and (prefers-reduced-motion: no-preference) and (any-hover: hover) and (any-pointer: fine)");
  const palette = {
    light: ["#7797df", "#67b3bb", "#a295d5"],
    dark: ["#7397d2", "#6db8bc", "#a397ca"],
  };
  const pointer = { x: 0, y: 0, active: false };
  let particles = [];
  let width = 0;
  let height = 0;
  let frame = 0;
  let previousTime = 0;
  let driftTime = 0;
  let attractionRadius = 0;
  let scatterUntil = 0;

  canvas.className = "site-particles";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  function resize() {
    width = root.clientWidth;
    height = window.innerHeight;
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    context.setTransform(scale, 0, 0, scale, 0, 0);
    attractionRadius = Math.min(280, Math.max(165, width * 0.24));

    const count = Math.min(136, Math.max(24, Math.round(width * height / 10500)));
    particles = Array.from({ length: count }, function (_, index) {
      const homeX = Math.random() * width;
      const homeY = Math.random() * height;
      const angle = Math.random() * Math.PI * 2;
      const orbit = 12 + Math.random() * 40;
      return {
        homeX, homeY, x: homeX, y: homeY,
        offsetX: Math.cos(angle) * orbit,
        offsetY: Math.sin(angle) * orbit,
        phase: angle,
        radius: 0.8 + Math.random() * 1.5,
        alpha: 0.13 + Math.random() * 0.22,
        color: index % 3,
        focus: 0,
        scatterTarget: null,
      };
    });
    if (!frame) draw();
  }

  function draw() {
    const colors = root.dataset.theme === "dark" ? palette.dark : palette.light;
    context.clearRect(0, 0, width, height);
    for (const particle of particles) {
      context.fillStyle = colors[particle.color];
      if (particle.focus > 0.03) {
        context.globalAlpha = particle.focus * 0.085;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 2.75, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = particle.alpha + particle.focus * 0.23;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius + particle.focus * 0.4, 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = 1;
  }

  function animate(time) {
    const delta = previousTime ? Math.min(time - previousTime, 40) : 16;
    previousTime = time;
    driftTime += delta;
    const scattering = driftTime < scatterUntil;
    const attracting = pointer.active && !scattering;
    const follow = 1 - Math.exp(-delta / (attracting ? 1000 : 430));
    const scatterFollow = 1 - Math.exp(-delta / 135);

    for (const particle of particles) {
      const homeX = particle.homeX + Math.cos(driftTime / 2900 + particle.phase) * 9;
      const homeY = particle.homeY + Math.sin(driftTime / 3500 + particle.phase) * 9;
      const distance = attracting ? Math.hypot(pointer.x - homeX, pointer.y - homeY) : attractionRadius;
      const pull = Math.min(0.98, Math.max(0, (1 - distance / attractionRadius) * 1.65));
      const scatterTarget = scattering ? particle.scatterTarget : null;
      const targetX = scatterTarget?.x ?? homeX + (pointer.x + particle.offsetX - homeX) * pull;
      const targetY = scatterTarget?.y ?? homeY + (pointer.y + particle.offsetY - homeY) * pull;
      const response = scatterTarget ? scatterFollow : follow;
      particle.x += (targetX - particle.x) * response;
      particle.y += (targetY - particle.y) * response;
      particle.focus += (pull - particle.focus) * response;
    }
    draw();
    frame = window.requestAnimationFrame(animate);
  }

  function releasePointer() {
    pointer.active = false;
  }

  function scatterParticles(event) {
    if (!motion.matches || event.pointerType === "touch" || event.button !== 0 || !event.detail) return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    scatterUntil = driftTime + 760;

    const radius = 170;
    for (const particle of particles) {
      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      particle.scatterTarget = null;
      if (distance >= radius) continue;

      const direction = distance > 0.1 ? Math.atan2(dy, dx) : particle.phase;
      const travel = 25 + 100 * (1 - distance / radius);
      particle.scatterTarget = {
        x: particle.x + Math.cos(direction) * travel,
        y: particle.y + Math.sin(direction) * travel,
      };
    }
  }

  function syncMotion() {
    window.cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    scatterUntil = 0;
    releasePointer();
    if (document.hidden) return;
    if (motion.matches) {
      frame = window.requestAnimationFrame(animate);
    } else {
      for (const particle of particles) {
        particle.x = particle.homeX;
        particle.y = particle.homeY;
        particle.focus = 0;
      }
      draw();
    }
  }

  window.addEventListener("pointermove", function (event) {
    if (!motion.matches || event.pointerType === "touch") return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  }, { passive: true });
  window.addEventListener("click", scatterParticles, { capture: true, passive: true });
  window.addEventListener("pointerout", function (event) {
    if (!event.relatedTarget) releasePointer();
  });
  window.addEventListener("pointercancel", releasePointer);
  window.addEventListener("blur", releasePointer);
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", syncMotion);
  motion.addEventListener("change", syncMotion);
  new MutationObserver(function () {
    if (!frame) draw();
  }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  resize();
  syncMotion();
})();

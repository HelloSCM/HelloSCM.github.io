---
layout: homepage
title: About
seo_title: Chenming Shang | Personal Homepage
---

<div class="about-profile" markdown="1">

<div class="about-heading">
  <h1 id="about-me">{{ site.title | escape }} <span class="about-name-zh" lang="zh-Hans">{{ site.name_zh | escape }}</span></h1>
</div>

<div class="about-intro" markdown="1">

{% if site.avatar and site.avatar != "" %}
<figure class="about-portrait">
  <img src="{{ site.avatar | relative_url }}" alt="Portrait of {{ site.title | escape }}" />
</figure>
{% endif %}

{% include scholar-stats.html %}

I am currently a 1st year Ph.D. student at the University of Hong Kong, advised by Prof. [Xiaojuan Qi]({{ site.data.advisors.xiaojuan_qi.url }}). I received my master’s degree from Tsinghua University supervised by Prof. [Yujiu Yang]({{ site.data.advisors.yujiu_yang.url }}) in 2025, and my bachelor’s degree from Sun Yat‑sen University supervised by Prof. [Zhi Jin]({{ site.data.advisors.zhi_jin.url }}) in 2022.

My research interest lies in **Self‑evolving Agent and Representation Learning**. The research topics I am currently interested in are data recursive self‑improvement, self‑evolving agent in dynamic environment, and multi‑agent world simulation.

<p class="about-collaboration">I am keen on exploring opportunities for collaboration in research or projects. If you are interested, please feel free to contact me. Email: <a href="mailto:{{ site.email | escape }}">{{ site.email | escape }}</a></p>

</div>

</div>

{% assign experience_rows = site.data.experience.education.size | at_least: site.data.experience.internships.size | plus: 1 %}
<div class="experience-sections" style="--experience-row-count: {{ experience_rows }}">
  {% include experience.html id="education" heading="Education" entries=site.data.experience.education %}
  {% include experience.html id="internships" heading="Internship Experience" entries=site.data.experience.internships %}
</div>

{% include publications.md selected_only=true %}

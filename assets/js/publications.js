(function () {
  function initializePublications() {
    const root = document.querySelector("[data-publication-list]");
    if (!root) return;

    const papers = Array.from(root.querySelectorAll("[data-publication]"));
    const years = Array.from(root.querySelectorAll("[data-publication-year]"));
    const filters = Array.from(root.querySelectorAll("[data-topic-filter]"));
    const controls = root.querySelector("[data-publication-filters]");
    const filterStatus = root.querySelector("[data-filter-status]");
    const search = root.querySelector("[data-publication-search]");
    const searchControls = root.querySelector("[data-publication-search-controls]");
    const clearSearch = root.querySelector("[data-search-clear]");
    let selectedTopic = "all";

    function normalizeSearch(text) {
      return text.normalize("NFKC").toLowerCase()
        .replace(/[^\p{L}\p{N}\p{M}]+/gu, " ").trim();
    }

    const searchableText = new Map(papers.map(function (paper) {
      return [paper, normalizeSearch(paper.dataset.searchText || paper.textContent || "")];
    }));

    function applyFilters() {
      const terms = normalizeSearch(search ? search.value : "").split(/\s+/).filter(Boolean);
      let visible = 0;
      papers.forEach(function (paper) {
        const matchesTopic = selectedTopic === "all" || paper.dataset.topic === selectedTopic;
        const matchesSearch = terms.every(function (term) {
          const text = searchableText.get(paper);
          // Short abbreviations should not match fragments of unrelated words.
          return /^[a-z]{1,2}$/.test(term)
            ? (" " + text + " ").includes(" " + term + " ")
            : text.includes(term);
        });
        paper.hidden = !matchesTopic || !matchesSearch;
        if (!paper.hidden) visible += 1;
      });
      years.forEach(function (year) {
        year.hidden = !Array.from(year.querySelectorAll("[data-publication]"))
          .some(function (paper) { return !paper.hidden; });
      });
      filters.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.dataset.topicFilter === selectedTopic));
      });
      if (filterStatus) {
        filterStatus.textContent = "Showing " + visible + " of " + papers.length + " papers"
          + (visible === 0 ? ". No publications found. Try another search or topic." : "");
      }
      if (clearSearch) clearSearch.hidden = !search || search.value.length === 0;
    }

    if (controls && filters.length) {
      filters.forEach(function (button) {
        button.addEventListener("click", function () {
          selectedTopic = button.dataset.topicFilter;
          applyFilters();
        });
      });
      controls.hidden = false;
    }

    if (search) {
      search.addEventListener("input", applyFilters);
      search.addEventListener("search", applyFilters);
      if (clearSearch) {
        clearSearch.addEventListener("click", function () {
          search.value = "";
          applyFilters();
          search.focus();
        });
      }
      if (searchControls) searchControls.hidden = false;
    }

    if ((controls && filters.length) || search) {
      applyFilters();
      if (filterStatus) filterStatus.hidden = false;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePublications, { once: true });
  } else {
    initializePublications();
  }
})();

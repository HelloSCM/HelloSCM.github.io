{% if include.selected_only %}
<h2 id="selected-publications" class="selected-publications-heading"><i class="fa-solid fa-book-open heading-icon" aria-hidden="true"></i><a href="{{ '/publications/' | relative_url }}">Selected Projects</a></h2>
{% else %}
<h1 id="publications" class="page-title"><i class="fa-solid fa-book-open heading-icon" aria-hidden="true"></i>Publications</h1>
{% if site.google_scholar and site.google_scholar != empty %}
<p class="publication-legend"><a href="{{ site.google_scholar | escape }}" target="_blank" rel="noopener noreferrer">Google Scholar</a></p>
{% endif %}
{% endif %}


<div class="publications{% if include.selected_only %} selected-publications{% endif %}" data-publication-list>
{% unless include.selected_only %}
<div class="publication-search" data-publication-search-controls role="search" aria-label="Search publications" hidden>
  <input type="search" data-publication-search aria-label="Search publications by title, author, journal, or keyword" placeholder="Search publications by title, author, journal, or keyword" autocomplete="off" spellcheck="false" aria-describedby="publication-filter-status">
  <button type="button" class="publication-search-clear" data-search-clear aria-label="Clear search" title="Clear search" hidden>&times;</button>
</div>
<div class="publication-filters" data-publication-filters role="group" aria-label="Filter publications by topic" hidden>
  <button type="button" data-topic-filter="all" aria-pressed="true">All</button>
  {% for topic in site.data.publication_topics %}
  <button type="button" data-topic-filter="{{ topic.id | escape }}" title="{{ topic.name | default: topic.label | escape }}" aria-pressed="false">{{ topic.label | escape }}</button>
  {% endfor %}
</div>
<p class="publication-filter-status" id="publication-filter-status" data-filter-status role="status" aria-live="polite" hidden></p>
{% endunless %}
{% if include.selected_only %}
  {% assign publication_groups = site.data.publications.main | where: "selected", true | sort: "featured_order", "last" | group_by: "selected" %}
{% else %}
  {% assign publication_groups = site.data.publications.main | group_by: "year" | sort: "name" | reverse %}
{% endif %}
{% assign publication_number = 1 %}

{% if include.selected_only %}<ol class="bibliography" role="list">{% endif %}
{% for publication_group in publication_groups %}
{% assign group_papers = publication_group.items %}
{% unless include.selected_only %}
{% assign lead_papers = group_papers | where: "lead_author", true %}
{% assign other_papers = group_papers | where_exp: "paper", "paper.lead_author != true" %}
{% assign group_papers = lead_papers | concat: other_papers %}
<div class="publication-year-group" data-publication-year>
<h2 class="year" id="publications-{{ publication_group.name | default: 'undated' | escape }}"><span>{{ publication_group.name | default: 'Year not listed' | escape }}</span></h2>
<ol class="bibliography" role="list" start="{{ publication_number }}">
{% endunless %}

{% for link in group_papers %}
{% assign show_teaser = false %}
{% if include.selected_only and link.image and link.image != '' %}
  {% assign show_teaser = true %}
{% endif %}

{% assign paper_topic = site.data.publication_topics | where: "id", link.topic | first %}
{% capture search_text %}{{ link.title | strip_html }} {{ link.authors | strip_html }} {{ link.conference | strip_html }} {{ link.conference_short }} {{ link.year }} {{ link.abstract }} {{ paper_topic.id }} {{ paper_topic.label }} {{ paper_topic.name }}{% endcapture %}
<li{% unless show_teaser %} class="publication-without-image"{% endunless %}{% unless include.selected_only %} value="{{ publication_number }}"{% endunless %} data-publication data-topic="{{ link.topic | escape }}" data-search-text="{{ search_text | strip_newlines | escape }}">
<div class="pub-row">
  {% if show_teaser %}
  <div class="publication-teaser">
    <img src="{{ link.image | relative_url | escape }}" alt="{{ link.image_alt | default: link.title | strip_html | escape }}" class="teaser" loading="lazy">
  </div>
  {% endif %}
  <div class="col-sm-9 publication-details">
      <div class="title">{% unless include.selected_only %}<span class="publication-number">{{ publication_number }}.</span> {% endunless %}{{ link.title | escape }}</div>
      <div class="author">{{ link.authors }}{% if link.author_note %} <em class="publication-author-note">({{ link.author_note | escape }})</em>{% endif %}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    {% if paper_topic or link.code or link.paper or link.project %}
    <div class="links">
      {% if paper_topic %}
      <span class="publication-topic" title="{{ paper_topic.name | escape }}">{{ paper_topic.label | escape }}</span>
      {% endif %}
      {% if link.project %}
      <a href="{{ link.project | relative_url | escape }}" class="btn btn-sm z-depth-0" target="_blank" rel="noopener noreferrer">Project</a>
      {% endif %}
      {% if link.paper %}
      <a href="{{ link.paper | relative_url | escape }}" class="btn btn-sm z-depth-0" target="_blank" rel="noopener noreferrer">Paper</a>
      {% endif %}
      {% if link.code %}
      <a href="{{ link.code | relative_url | escape }}" class="btn btn-sm z-depth-0" target="_blank" rel="noopener noreferrer">Code</a>
      {% endif %}
    </div>
    {% endif %}
  </div>
</div>
</li>

{% assign publication_number = publication_number | plus: 1 %}
{% endfor %}

{% unless include.selected_only %}
</ol>
</div>
{% endunless %}
{% endfor %}
{% if include.selected_only %}</ol>{% endif %}
</div>
{% if include.selected_only %}
<p class="selected-publications-all"><a href="{{ '/publications/' | relative_url }}">View all publications <span aria-hidden="true">&rarr;</span></a></p>
{% endif %}

<script src="{{ '/assets/js/publications.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>

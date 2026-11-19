---
layout: default
title: Academic Activities
nav_title: Activities
description: Scholarships, competition awards, and academic and community service.
permalink: /activities/
full_width: true
activities: true
---

<h1 class="page-title"><i class="fa-solid fa-list-check heading-icon" aria-hidden="true"></i>Academic Activities</h1>

<div class="academic-activities">
  <h2 id="awards" class="activities-heading"><span><i class="fa-solid fa-award heading-icon" aria-hidden="true"></i>Awards &amp; Honors</span></h2>
  <h3><i class="fa-solid fa-scroll heading-icon" aria-hidden="true"></i>Scholarships</h3>
  <ul class="activities-list">
    {% for scholarship in site.data.activities.scholarships %}
    <li>{{ scholarship | escape }}</li>
    {% endfor %}
  </ul>

  <h3><i class="fa-solid fa-trophy heading-icon" aria-hidden="true"></i>Competition Awards</h3>
  <ul class="activities-list">
    {% for award in site.data.activities.competitions %}
    <li><strong>{{ award.result | escape }}</strong> — {{ award.name | escape }} ({{ award.year }})</li>
    {% endfor %}
  </ul>

  <h2 id="services" class="activities-heading"><span><i class="fa-solid fa-handshake-angle heading-icon" aria-hidden="true"></i>Academic &amp; Community Service</span></h2>
  <ul class="activities-list">
    {% for item in site.data.activities.service %}
    <li><strong>{{ item.role | escape }}</strong> — {{ item.organization | escape }}</li>
    {% endfor %}
  </ul>
</div>

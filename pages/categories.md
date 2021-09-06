---
layout: default
title: RSE-ops Categories
permalink: /categories
---

{% include main_toc.html %}


{% for universe in site.data.rse-opts %}{% for category in universe.categories %}
<div class="category-card {% cycle 'alt', '' %}">
  <div class="meta">
    <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/category-cards/image-1.jpg)"></div>
    <ul class="details">
      {% for tool in category.entries %}
      <li class="author">{{ tool.name }}</li>{% endfor %}
      </ul>
    </div>
    <div class="description">
      <h1>{{ category.name | uppercase }}</h1>
      <h2>Includes {{ category.entries | size }} tools</h2>
      <p>{{ category.description }}</p>
      <p class="read-more"><span style='float:left'>Learn More</span>
      {% for link in category.paper_sections %}
      <a href="{{ site.baseurl }}/categories/{{ link }}/">{{ link | replace: '-', ' ' | uppercase }}</a><br>{% endfor %}
      </p>
    </div>
  </div>
{% endfor %}{% endfor %}

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

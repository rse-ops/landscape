---
layout: default
title: What technology or tool should you use?
permalink: /choosers
---

{% include main_toc.html %}

{% for universe in site.data.rse-opts %}{% for category in universe.categories %}{% if category.chooser == true %}
<div class="category-card {% cycle 'alt', '' %}">
  <div class="meta">
    <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/category-cards/image-1.jpg)"></div>
    <ul class="details"></ul>
    </div>
    <div class="description">
      <h1>{{ category.name | uppercase }}</h1>
      <h2>Includes {{ category.entries | size }} tools</h2>
      <p>{{ category.description }}</p>
      <p class="read-more"><span style='float:left'>Choose a Tool</span>
      <a href="{{ site.baseurl }}/chooser/{{ category.slug }}/">{{ category.slug | replace: '-', ' ' | uppercase }}</a><br>
      </p>
    </div>
  </div>
{% endif %}{% endfor %}{% endfor %}

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

---
layout: default
title: What technology or tool should you use?
permalink: /choosers
---

{% include main_toc.html %}

{% for universe in site.data.rse-opts %}{% for category in universe.categories %}{% if category.chooser == true %}
<div class="category-card {% cycle 'alt', '' %}">
    <div class="description" style="flex-basis:100%">
      <h1>{{ category.name | uppercase }}</h1>
      <h2>Includes {{ category.entries | size }} tools</h2>
      <p>{{ category.description }}</p>
      <p style="padding-right:25px; float:left" class="read-more">
      <a href="{{ site.baseurl }}/chooser/{{ category.slug }}/">View the Chooser Here</a><br>
      </p>
    </div>
  </div>
{% endif %}{% endfor %}{% endfor %}

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

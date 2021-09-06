---
layout: default
title: RSE-ops Projects Landscape Sitemap
permalink: /sitemap
---

<style>
ul.listing li::marker {
  color: #D2228C
}

ul.listing {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>

{% include main_toc.html %}

<div class="card">

Welcome to the Rse-ops Landscape sitemap! Here you can quickly browse all pages, or simply view
the single <a href="{{ site.baseurl }}/src/rse-ops.pdf">compiled pdf</a>.

{% assign pages = site.pages | sort: 'last_modified_at' %}
<ul class="listing">
{% for page in pages %}{% unless page.url contains 'paper-details' %}{% if page.title %}
<li><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></li>{% endif %}{% endunless %}
{% endfor %}
</ul>

</div>

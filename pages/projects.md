---
layout: default
title: RSE-ops Projects Landscape
permalink: /projects
---

<ul id="filters" class="clearfix">
<li><span class="filter"><a href="{{ site.baseurl }}/">home</a></span></li>
  <li><span class="filter active" data-filter="{% for universe in site.data.rse-opts %}{% for category in universe.categories %}.{{ category.slug }} {% endfor %}{% endfor %}">all</span></li>
{% for universe in site.data.rse-opts %}{% for category in universe.categories %}<li><span class="filter" data-filter=".{{ category.slug }}">{{ category.slug }}</span></li>{% endfor %}{% endfor %}
</ul>

<div id="portfoliolist">

{% for universe in site.data.rse-opts %}{% for category in universe.categories %}{% for tool in category.entries %}
  <div class="portfolio {{ category.slug }} all" data-cat="{{ category.slug }}">
    <div class="portfolio-wrapper">
      <img src="{% if tool.img %}{{site.baseurl}}/tools/{{ tool.img }}{% else %}https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Color_icon_orange.svg/250px-Color_icon_orange.svg.png{% endif %}" alt="" />
      <div class="label">
   <div class="label-text">
     <a class="text-title">{{ tool.name }}</a>
       <span class="text-category">{{ category.name }}</span>
      </div>
     <div class="label-bg"></div>
    </div>
  </div>
</div>
{% endfor %}{% endfor %}{% endfor %}
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/script.js"></script>

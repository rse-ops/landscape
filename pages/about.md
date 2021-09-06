---
layout: default
title: About RSE-ops
permalink: /about
---

{% include main_toc.html %}

<div class="tabs cf" style="padding-top:20px">
  <input type="radio" name="tabs" id="tab1" checked>
  <label for="tab1">Introduction</label>
  <input type="radio" name="tabs" id="tab2">
  <label for="tab2">What is Dev-ops?</label>
  <input type="radio" name="tabs" id="tab3">
  <label for="tab3">What is RSE-ops?</label>
  <input type="radio" name="tabs" id="tab4">
  <label for="tab4">Comparing the Two</label>

  <div id="tab-content1" class="tab-content">
  {% include paper/introduction.html %}

  <h2>Related</h2>
  <ul>
  <li><a href="{{ site.baseurl }}/about/follow-devops">Why can't RSE-ops just follow or be DevOps?</a></li>
  <li><a href="{{ site.baseurl }}/categories/summary">A Summary Table of Categories</a></li>
  <li><a href="{{ site.baseurl }}/categories/opportunities">A Summary of Opportunities</a></li>
  </ul>
  </div>

  <div id="tab-content2" class="tab-content">
  {% include paper/what-is-devops.html %}
  </div>

  <div id="tab-content3" class="tab-content">
  {% include paper/what-is-rseops.html %}
  </div>

  <div id="tab-content4" class="tab-content">
  {% include paper/comparison.html %}
  <p>Continue reading about the differences for each <a href="{{ site.baseurl }}/categories">category</a> in the space.</p>
  </div>
</div>

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
  <input type="radio" name="tabs" id="tab3"><label for="tab3">What is RSE-ops?</label>

  <div id="tab-content1" class="tab-content">
  {% include paper/introduction.html %}
  </div>

  <div id="tab-content2" class="tab-content">
  {% include paper/what-is-devops.html %}
  </div>

  <div id="tab-content3" class="tab-content">
  {% include paper/what-is-rseops.html %}
  </div>
</div>

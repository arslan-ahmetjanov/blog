---
layout: default
title: {{ tag }}
---

# Посты по тегу "{{ tag }}"

{% for post in collections.posts %}
  {% if post.data.tags and post.data.tags.includes(tag) %}
    <article>
      <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
      <p>{{ post.data.excerpt }}</p>
    </article>
  {% endif %}
{% endfor %}
---
title: Replace more then one whitespace with only one. Regexp php.  
slug: replace-more-then-one-whitespace-with-only-one-regexp-php
date: 2015-07-28T15:04:24Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - regexp

---
<p><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; color: #660000; background-color: #f7faff;">1) $source </span><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; background-color: #f7faff;">= </span><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; font-style: italic; background-color: #f7faff;">preg_replace</span><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; background-color: #f7faff;">(</span><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; color: #008000; font-weight: bold; background-color: #f7faff;">'/\s+/'</span><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; background-color: #f7faff;">,</span><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; color: #008000; font-weight: bold; background-color: #f7faff;">''</span><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; background-color: #f7faff;">,</span><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; color: #660000; background-color: #f7faff;">$source</span><span style="font-family: 'DejaVu Sans Mono'; font-size: 12pt; background-color: #f7faff;">);</span></p>
<pre style="font-family: 'DejaVu Sans Mono'; font-size: 12pt;"><span style="color: #660000; background-color: #f7faff;">2) $source </span><span style="background-color: #f7faff;">= </span><span style="background-color: #f7faff; font-style: italic;">preg_replace</span><span style="background-color: #f7faff;">(</span><span style="color: #008000; background-color: #f7faff; font-weight: bold;">'/\s{2,}/'</span><span style="background-color: #f7faff;">,</span><span style="color: #008000; background-color: #f7faff; font-weight: bold;">''</span><span style="background-color: #f7faff;">,</span><span style="color: #660000; background-color: #f7faff;">$source</span><span style="background-color: #f7faff;">);</span></pre>
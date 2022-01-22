---
title: final classed and why inheritance is not good
slug: final-classes
date: 2022-01-16T14:08:58.326Z
header_img: /uploads/what-is-php-3-1.png
draft: true
featured: false
tags:
  - php
---
**Shortly:**

inheritance breaks the ‘single responsibility’ principle because every child class contain all the logic added in the inheritance chain

inheritance breaks ‘open-closed’ principle because child class can change ‘closed’ protected properties and methods of the base class

inheritance can lead to the ‘side’ effects, when if you want to make small change in the base class – you need to analyze all child classes chain and probably your change can break the logic in some of them.

because of inheritance, all the chain hierarchy becomes ‘fragile’ (https://en.wikipedia.org/wiki/Fragile_base_class) and tightly coupled.

**How to avoid this?**

to define interface first

to use keyword ‘final’ and to restrict classed extension for the classes that implements basic implementation of the interface

for classes that need to extend basic class behavior – not to use ‘extend’ keyword, but still use ‘implement’ keyword . Use dependency injection and pass the basic class as a parameter to the constructor. For method that are not changed – just to call basic (injected) functionality – yes you still need to write several lines of code here. For methods that have extended functionality – write the extended functionality and use ‘basic’ functionality as an addition. (this principle is called ‘use composition instead of inheritance )

Source: https://habr.com/ru/post/482154/
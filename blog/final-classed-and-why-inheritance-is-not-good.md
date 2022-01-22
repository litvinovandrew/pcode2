---
title: final classed and why inheritance is not good
slug: final-classed-and-why-inheritance-is-not-good
date: 2021-07-05T08:47:55Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:paragraph -->
<p><strong>Shortly: </strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>inheritance breaks the 'single responsibility' principle because every child class contain all the logic added in the inheritance chain</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>inheritance breaks 'open-closed' principle because child class can change 'closed' protected properties and methods of the base class</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>inheritance can lead to the 'side' effects, when if you want to make small change in the base class - you need to analyze all child classes chain and probably your change can break the logic in some of them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>because of inheritance, all the chain hierarchy becomes 'fragile' (https://en.wikipedia.org/wiki/Fragile_base_class)  and tightly coupled.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>How to avoid this?</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>to define interface first<br></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>to use keyword 'final' and to restrict classed extension for the classes that implements basic implementation of the interface</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>for classes that need to extend basic class behavior - not to use 'extend' keyword, but still use 'implement' keyword . Use dependency injection and pass the basic class as a parameter to the constructor. For method that are not changed - just to call basic (injected) functionality - yes you still need to write several lines of code here. For methods that have extended functionality  - write the extended functionality and use 'basic' functionality as an addition. (this principle is called 'use composition instead of inheritance )</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Source: https://habr.com/ru/post/482154/</p>
<!-- /wp:paragraph -->
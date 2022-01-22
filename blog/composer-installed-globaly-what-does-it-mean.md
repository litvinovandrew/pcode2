---
title: Composer installed globaly - what does it mean
slug: composer-installed-globaly-what-does-it-mean
date: 2021-11-25T13:21:51Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:paragraph -->
<p>It means that it is installed somewhere in your home directory. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To check this you need to execute command:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>composer config --list --global</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will show you where is it installed. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>And if you want to be able execute binaries installed via composer from command line  - then add the composers "bin path" to the your path.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>for example:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>export PATH=/home/myuser/.config/composer/vendor/bin:"${PATH}"<br></p>
<!-- /wp:paragraph -->
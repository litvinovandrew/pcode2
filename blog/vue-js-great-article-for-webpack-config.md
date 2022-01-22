---
title: Vue.js great article for webpack config
slug: vue-js-great-article-for-webpack-config
date: 2019-06-23T05:52:37Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:preformatted -->
<pre class="wp-block-preformatted">splitChunks: {<br>  chunks: 'all',<br>  maxInitialRequests: Infinity,<br>  minSize: 0,<br>  cacheGroups: {<br>    vendor: {<br>      test: /[\\/]node_modules[\\/]/,<br>      name (module) {<br>        <strong>const </strong>packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];<br>        <strong>return </strong>`npm.${packageName.replace('@', '')}`;<br>      }<br>    },<br>    styles: {<br>      test: /\.css$/,<br>      name: 'styles',<br>      chunks: 'all',<br>      enforce: <strong>true<br>    </strong>}<br>  }<br>}<br>source: <a href="https://medium.com/js-dojo/how-to-configure-webpack-4-with-vuejs-a-complete-guide-209e943c4772">https://medium.com/js-dojo/how-to-configure-webpack-4-with-vuejs-a-complete-guide-209e943c4772</a></pre>
<!-- /wp:preformatted -->
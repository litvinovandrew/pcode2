---
title: /boot overflow
slug: boot-overflow
date: 2016-04-12T07:05:59Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - ubuntu
 - dpkg

---
<p>1)&nbsp;dpkg -l |grep linux &nbsp; &nbsp; &nbsp; - &nbsp;list of all kernels in the system</p>
<p>2)&nbsp;uname -a &nbsp; &nbsp; &nbsp; &nbsp;- see current used image(kernel)</p>
<p>3)&nbsp;dpkg --purge linux-image-3.16.0-51-generic &nbsp;- remove something</p>
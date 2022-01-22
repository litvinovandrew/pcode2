---
title: Flatten a Docker container
slug: flatten-a-docker-container
date: 2016-05-10T15:13:04Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - docker
 - linux
 - trics

---
<p>&nbsp;</p>
<p>So it is only possible to &ldquo;flatten&rdquo; a Docker container, not an image. So we need to start a container from an image first. Then we can export and import the container in one line:</p>
<p>&nbsp;</p>
<p>docker export &lt;CONTAINER ID&gt; | docker import - some-image-name:latest</p>
<p>&nbsp;</p>
<p>Source:&nbsp;http://tuhrig.de/flatten-a-docker-container-or-image/</p>
---
title: Linux. difference beetween two folders
slug: linux-difference-beetween-two-folders
date: 2016-04-19T14:36:30Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - linux
 - bash

---
<p>diff --brief -Nr /home/andrew/public/code/common/ /home/master/public/code/common/ &nbsp;</p>
<p>Excluding</p>
<p>&nbsp;diff --brief --exclude="runtime" --exclude="assets" -Nr /home/andrew/public/code/backend/ /home/develop/public/code/backend/</p>
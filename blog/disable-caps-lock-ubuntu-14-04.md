---
title: Disable Caps Lock Ubuntu 14.04
slug: disable-caps-lock-ubuntu-14-04
date: 2015-05-28T09:06:52Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - Caps Lock
 - Ubuntu

---
<p style="margin: 0px 0px 1em; padding: 0px; border: 0px; font-size: 15px; clear: both; color: #111111; font-family: Ubuntu, Arial, 'libra sans', sans-serif; line-height: 19.5px;">You should edit the file&nbsp;<strong style="margin: 0px; padding: 0px; border: 0px;">/etc/default/keyboard</strong>&nbsp;and modify the XKBOPTIONS setting.</p>
<p style="margin: 0px 0px 1em; padding: 0px; border: 0px; font-size: 15px; clear: both; color: #111111; font-family: Ubuntu, Arial, 'libra sans', sans-serif; line-height: 19.5px;">For example to map capslock to control set&nbsp;<strong style="margin: 0px; padding: 0px; border: 0px;">XKBOPTIONS=&ldquo;ctrl:nocaps&rdquo;</strong></p>
<p style="margin: 0px 0px 1em; padding: 0px; border: 0px; font-size: 15px; clear: both; color: #111111; font-family: Ubuntu, Arial, 'libra sans', sans-serif; line-height: 19.5px;">log out and log in again for changes to impact your system.</p>
<p style="margin: 0px 0px 1em; padding: 0px; border: 0px; font-size: 15px; clear: both; color: #111111; font-family: Ubuntu, Arial, 'libra sans', sans-serif; line-height: 19.5px;"><a href="http://askubuntu.com/questions/453793/remapping-caps-lock-in-14-04-trusty-tahr">http://askubuntu.com/questions/453793/remapping-caps-lock-in-14-04-trusty-tahr</a></p>
<p style="margin: 0px 0px 1em; padding: 0px; border: 0px; font-size: 15px; clear: both; color: #111111; font-family: Ubuntu, Arial, 'libra sans', sans-serif; line-height: 19.5px;">Caps working as ctrl now but it's OK.</p>
---
title: SSL Certificate Ubuntu Apache (Another variant)
slug: ssl-certificate-ubuntu-apache-another-variant
date: 2016-03-22T11:10:38Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - ssl
 - ubuntu
 - apache2
 - certificate

---
<p>1)&nbsp;sudo openssl genrsa -des3 -passout pass:x -out /etc/apache2/ssl/star_plexisoft_com1.key 2048</p>
<p>2)&nbsp;sudo openssl rsa -passin pass:x -in /etc/apache2/ssl/star_plexisoft_com1.key -out /etc/apache2/ssl/star_plexisoft_com2.key</p>
<p>3)&nbsp;&nbsp;sudo rm /etc/apache2/ssl/star_plexisoft_com1.key</p>
<p>4)&nbsp;udo openssl req -new -key /etc/apache2/ssl/star_plexisoft_com2.key -out /etc/apache2/ssl/star_plexisoft_com.cert</p>
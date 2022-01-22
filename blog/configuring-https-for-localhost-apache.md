---
title: Configuring HTTPS for localhost apache
slug: configuring-https-for-localhost-apache
date: 2018-03-31T09:01:26Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - https
 - ssl
 - docker
 - apache

---
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>1) from su</p>
<p>a2enmod ssl</p>
<p>&nbsp;</p>
<p>2) service apache2 restart</p>
<p>&nbsp;</p>
<p>3) mkdir /etc/apache2/ssl</p>
<p>&nbsp;</p>
<p>4) openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt</p>
<p>&nbsp;</p>
<p>fill all required</p>
<p>&nbsp;</p>
<p>5) sudo mcedit /etc/apache2/sites-available/default-ssl.conf</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&lt;IfModule mod_ssl.c&gt;</p>
<p>&nbsp; &nbsp; &lt;VirtualHost _default_:443&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; ServerAdmin admin@example.com</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; ServerName site.loc</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; DocumentRoot "/var/www/html/web/"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; ServerAlias www.site.loc</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; ErrorLog ${APACHE_LOG_DIR}/error.log</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; CustomLog ${APACHE_LOG_DIR}/access.log mainlog</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; SSLEngine on</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; SSLCertificateFile /etc/apache2/ssl/apache.crt</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; SSLCertificateKeyFile /etc/apache2/ssl/apache.key</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;FilesMatch "\.(cgi|shtml|phtml|php)$"&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SSLOptions +StdEnvVars</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;/FilesMatch&gt;</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;Directory /usr/lib/cgi-bin&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SSLOptions +StdEnvVars</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;/Directory&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; BrowserMatch "MSIE [2-6]" \</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; nokeepalive ssl-unclean-shutdown \</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; downgrade-1.0 force-response-1.0</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; BrowserMatch "MSIE [17-9]" ssl-unclean-shutdown</p>
<p>&nbsp; &nbsp; &lt;/VirtualHost&gt;</p>
<p>&lt;/IfModule&gt;</p>
<p>&nbsp;</p>
<p>6)&nbsp; a2ensite default-ssl.conf</p>
<p>&nbsp;</p>
<p>7)&nbsp; service apache2 reload</p>
<p>&nbsp;</p>
<p>8) got to https://site.loc</p>
<p>&nbsp;</p>
<p>origin:&nbsp;https://www.digitalocean.com/community/tutorials/how-to-create-a-ssl-certificate-on-apache-for-ubuntu-14-04&nbsp;</p>
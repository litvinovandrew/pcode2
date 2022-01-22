---
title: Nginx proxy Ubuntu
slug: nginx-proxy-ubuntu
date: 2019-05-30T19:14:42Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:paragraph -->
<p>1 apt-get install nginx</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>2 vim /etc/nginx/sites-available/myanotherconfig</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>3 insert following lines:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>server {<br>
    listen 8080;</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>location / {
        proxy_pass         http://172.19.0.30;
        proxy_redirect     off;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Host $server_name;
    }</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>4 ln -s /etc/nginx/sites-available/myanotherconfig /etc/nginx/sites-enabled/myanotherconfig</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>5 service nginx configtest</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>6 service nginx restart</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now, when you type in the browser localhost:8080 your request will be redirected to the http://172.19.0.30</p>
<!-- /wp:paragraph -->
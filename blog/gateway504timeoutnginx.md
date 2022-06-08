---
title: How to Fix 504 Gateway Timeout using Nginx
slug: gateway504timeoutnginx
date: 2022-06-08T10:37:05.720Z
header_img: /uploads/fix-504-gateway-timeout-error-nginx.png
draft: false
featured: false
tags:
  - php
  - nginx
  - "504"
  - timeout
---
If you google it you probably will find three different advises:

1. to add into the  "location" section of the  /etc/nginx/conf.d/default.conf the following lines:

 `proxy_http_version 1.1; #for long timeouts`

` proxy_set_header Connection ""; #for long timeouts`

2. to create another file in the /etc/nginx/conf.d/timeout.conf with the following content:

`proxy_connect_timeout 600;`

`proxy_send_timeout 600;`

`proxy_read_timeout 600;`

`send_timeout 600;`

3. last and the most rear advise is to use `fastcgi_read_timeout`  but it is only applicable if you are using php :

`location ~ \.php$ {`

`      fastcgi_split_path_info ^(.+\.php)(/.+)$;`

`      fastcgi_pass solugame-php-fpm:9000;`

`      fastcgi_index index.php;`

`      include fastcgi_params;`

`      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;`

`      fastcgi_param PATH_INFO $fastcgi_path_info;`

`      ``fastcgi_read_timeout 600;`

`} `

I have used them all but looks only the last one helped to my nginx server
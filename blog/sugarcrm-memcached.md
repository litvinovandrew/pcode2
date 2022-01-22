---
title: SugarCRM + memcached
slug: sugarcrm-memcached
date: 2019-05-15T12:04:39Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:paragraph -->
<p>apt-get update<br>
apt-get install php-memcached<br>
service memcached start<br>
ps -ef | grep -i memcached</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>apt-get -y install gcc make autoconf libc-dev pkg-config<br>
apt-get -y install zlib1g-dev<br>
apt-get -y install libmemcached-dev</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>pecl install memcached</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>-&gt; When you are shown the prompt : libmemcached directory [no] :<br>
-&gt;type or paste the following text exactly as shown and press Enter:  no --disable-memcached-sasl<br>
-&gt; answer "no" to everithing else</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>mcedit /usr/local/etc/php/php.ini <br>
input:<br>
    extension=memcached.so<br>
    session.save_handler = memcached<br>
    session.save_path = 127.0.0.1:11211</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>service apache2 reload</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sugar config_override.php<br>
$sugar_config['external_cache']['memcache']['host'] = 'ip_to_memcache_server';</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>apt-get install libmemcached-tools<br>
memcdump --servers=127.0.0.1</p>
<!-- /wp:paragraph -->
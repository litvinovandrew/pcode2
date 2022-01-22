---
title: Quick free elastic search (AWS micro instance)
slug: quick-free-elastic-search-aws-micro-instance
date: 2018-01-27T20:53:28Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - aws
 - docker
 - kibana
 - elasticsearch

---
<p>Requirements: running free micro instance with installed docker and docker compose</p>
<p>&nbsp;</p>
<p>1) Login into micro instance</p>
<p>2) cd ~</p>
<p>3) git clone&nbsp;https://github.com/litvinovandrew/elasic-search-docker.git .</p>
<p>4) docker-compose up (sudo docker-compose up)</p>
<p>5) if somthing wrong with (max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]) run the following command "<span style="background-color: transparent; font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 11.9px; color: #24292e;">sudo sysctl -w vm.max_map_count=262144</span>"</p>
<p>6) enable ports on the AWS : log in to the console -&gt; add rules for ports 5601 - kibana, 9200 - elastic .&nbsp;</p>
<p><img src="/uploads/cc25a41303.jpg" alt="" /></p>
<p>&nbsp;7) Open in the browser http://your_aws_ip:5601&nbsp; and login using login = "elastic" password = "changeme"</p>
<p><img src="/uploads/20a069d759.jpg" alt="" /></p>
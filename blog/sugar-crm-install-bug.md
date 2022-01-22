---
title: Sugar CRM Install bug
slug: sugar-crm-install-bug
date: 2018-05-16T18:12:11Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - sugarcrm install

---
<p>it is triying to test htaccess file and doing request to itself - but it cant see "SUCCESS" test because instalation scripts redirects to itself.</p>
<p>And the second -&nbsp; inside docker not working function&nbsp;$res = file_get_contents($_SESSION['setup_site_url']."/itest.txt");</p>
<p>because docker doesnt know his url by ip. Solution - to add to hosts : yoursite.domain 127.0.0.1</p>
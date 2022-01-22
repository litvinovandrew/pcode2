---
title: Mysql and shuffle(reverse) email adresses
slug: mysql-and-shufflereverse-email-adresses
date: 2021-03-22T10:25:42Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:list {"ordered":true} -->
<ol><li>create custom function </li><li></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>USE db_name;
 DROP function IF EXISTS email_reverse;

DELIMITER $$
 USE db_name$$
 CREATE DEFINER=root@% FUNCTION email_reverse(email TEXT) RETURNS text CHARSET utf8mb4 COLLATE utf8mb4_bin
 BEGIN
 DECLARE uName VARCHAR(255);
 DECLARE strOther VARCHAR(255);
 DECLARE strHost VARCHAR(255);
 DECLARE strDomain VARCHAR(255);

set uName = substring_index(email,'@',1);
set strOther = REPLACE(email,concat(uName,'@'),'');

set strHost = substring_index(strOther,'.',1);
set strDomain = substring_index(strOther,'.',-1);

RETURN concat(reverse(uName),'@',reverse(strHost),'.',reverse(strDomain));

END$$
DELIMITER ;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
 <h5 class="mb-5"><strong>2. Update existing values with query</strong></h4>

<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>update email_addresses set email_address = email_reverse(email_address)<br>where email_address is not null </p>

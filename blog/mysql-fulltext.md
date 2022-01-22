---
title: MySQL Fulltext
slug: mysql-fulltext
date: 2015-07-14T08:43:37Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - MySQL
 - Fulltext

---
<div style="color: #222222; font-family: arial, sans-serif; font-size: small;"><span style="font-size: 12.8000001907349px;">Questions:&nbsp;</span></div>
<div style="color: #222222; font-family: arial, sans-serif; font-size: small;">
<div>We need new table. Should we store metadata? I think we should. We need unifyed approach.</div>
<div>MySql fultext?&nbsp; Only from 5.6 version for InnoDB tables.</div>
<div>&nbsp;</div>
<div>According to the&nbsp;<a style="color: #1155cc;" href="https://dev.mysql.com/doc/refman/5.5/en/fulltext-search.html" target="_blank">https://dev.mysql.com/doc/<wbr />refman/5.5/en/fulltext-search.<wbr />html</a>&nbsp;</div>
<blockquote class="gmail_quote" style="margin: 0px 0px 0px 0.8ex; border-left-width: 1px; border-left-color: #cccccc; border-left-style: solid; padding-left: 1ex;">For large data sets, it is much faster to load your data into a table that has no FULLTEXT index<br />and then create the index after that, than to load data into a table that has an existing FULLTEXT index.</blockquote>
<div>
<div style="font-size: small;">&nbsp;</div>
<div style="font-size: small;">&nbsp;</div>
<div style="font-size: small;">Sphinks?I dont think so. It is like a&nbsp;shooting from gun on sparrows.</div>
<p>&nbsp;</p>
</div>
</div>
<div style="color: #222222; font-family: arial, sans-serif; font-size: small;">&nbsp;</div>
<div style="color: #222222; font-family: arial, sans-serif; font-size: small;"><span style="font-size: 12.8000001907349px;">Till now we made search based on the certain-type columns : ... ... . &nbsp;... . But now we a going to implement search on a field with type "text". Such search type is called "fulltext" search and MySql has built in support for it (</span><span style="font-size: 12.8000001907349px;">https://dev.mysql.com/doc/refman/5.5/en/fulltext-search.html).&nbsp;</span></div>
<div style="color: #222222; font-family: arial, sans-serif; font-size: small;">&nbsp;</div>
<div style="color: #222222; font-family: arial, sans-serif; font-size: small;">Full text search has a lot of advantages : sorting by relevancy, stop words (words that are omitted from the search ), natural language search and a lot of others.&nbsp;</div>
<p>&nbsp;</p>
---
title: Google Calendar API
slug: google-calendar-api
date: 2016-11-04T13:57:04Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - google API
 - API
 - Google Calendar

---
<p>How to share Google Calendar created by API?</p>
<p>Please do not try to do it with "primary" calendar - this is impossible.</p>
<p>All you need id&nbsp;</p>
<p>1) to create new calendar with the API</p>
<pre style="font-family: 'DejaVu Sans Mono'; font-size: 9pt; padding-left: 30px;"><span style="color: #660000; background-color: #f7faff;">$calendar </span><span style="background-color: #f7faff;">= </span><span style="color: #000080; background-color: #f7faff; font-weight: bold;">new </span><span style="background-color: #f7faff;">Google_Service_Calendar_Calendar();<br /></span><span style="color: #660000; background-color: #f7faff;">$calendar</span><span style="background-color: #f7faff;">-&gt;setSummary(</span><span style="color: #008000; background-color: #f7faff; font-weight: bold;">'PBGNonPrimaryCalendar'</span><span style="background-color: #f7faff;">);<br /></span><span style="color: #660000; background-color: #f7faff;">$calendar</span><span style="background-color: #f7faff;">-&gt;setTimeZone(date_default_timezone_get());<br /></span><span style="background-color: #f7faff;"><br /></span><span style="color: #660000; background-color: #f7faff;">$createdCalendar </span><span style="background-color: #f7faff;">= </span><span style="color: #660000; background-color: #f7faff;">$this</span><span style="background-color: #f7faff;">-&gt;</span><span style="color: #660e7a; background-color: #f7faff; font-weight: bold;">service</span><span style="background-color: #f7faff;">-&gt;</span><span style="color: #660e7a; background-color: #f7faff; font-weight: bold;">calendars</span><span style="background-color: #f7faff;">-&gt;insert(</span><span style="color: #660000; background-color: #f7faff;">$calendar</span><span style="background-color: #f7faff;">);<br /></span><span style="background-color: #f7faff;"><br /></span><span style="color: #808080; background-color: #f7faff; font-style: italic;">//copy this id and define it in the googleApi manager<br /></span><span style="color: #000080; background-color: #f7faff; font-weight: bold;">echo </span><span style="color: #660000; background-color: #f7faff;">$createdCalendar</span><span style="background-color: #f7faff;">-&gt;getId();</span></pre>
<p>2) copy id of the newly created Calendar</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="background-color: #f7faff; color: #808080; font-style: italic; font-family: 'DejaVu Sans Mono'; font-size: 9pt;">ap4si5q326p2s74ui7n27gpu4@group.calendar.google.com</span></p>
<p>3) give acces to some users to access this calendar</p>
<pre style="font-family: 'DejaVu Sans Mono'; font-size: 9pt; padding-left: 30px;"><span style="color: #660000; background-color: #f7faff;">$rule </span><span style="background-color: #f7faff;">= </span><span style="color: #000080; background-color: #f7faff; font-weight: bold;">new </span><span style="background-color: #f7faff;">Google_Service_Calendar_AclRule();<br /></span><span style="color: #660000; background-color: #f7faff;">$scope </span><span style="background-color: #f7faff;">= </span><span style="color: #000080; background-color: #f7faff; font-weight: bold;">new </span><span style="background-color: #f7faff;">Google_Service_Calendar_AclRuleScope();<br /></span><span style="background-color: #f7faff;"><br /></span><span style="color: #660000; background-color: #f7faff;">$scope</span><span style="background-color: #f7faff;">-&gt;setType(</span><span style="color: #008000; background-color: #f7faff; font-weight: bold;">"user"</span><span style="background-color: #f7faff;">);<br /></span><span style="color: #660000; background-color: #f7faff;">$scope</span><span style="background-color: #f7faff;">-&gt;setValue(<span style="color: #660000;">'someuser@gmail.com'</span></span><span style="background-color: #f7faff;">);<br /></span><span style="color: #660000; background-color: #f7faff;">$rule</span><span style="background-color: #f7faff;">-&gt;setScope(</span><span style="color: #660000; background-color: #f7faff;">$scope</span><span style="background-color: #f7faff;">);<br /></span><span style="color: #660000; background-color: #f7faff;">$rule</span><span style="background-color: #f7faff;">-&gt;setRole(</span><span style="color: #008000; background-color: #f7faff; font-weight: bold;">"writer"</span><span style="background-color: #f7faff;">);<br /></span><span style="background-color: #f7faff;"><br /></span><span style="color: #660000; background-color: #f7faff;">$createdRule </span><span style="background-color: #f7faff;">= </span><span style="color: #660000; background-color: #f7faff;">$this</span><span style="background-color: #f7faff;">-&gt;</span><span style="color: #660e7a; background-color: #f7faff; font-weight: bold;">service</span><span style="background-color: #f7faff;">-&gt;</span><span style="color: #660e7a; background-color: #f7faff; font-weight: bold;">acl</span><span style="background-color: #f7faff;">-&gt;insert('</span>ap4si<span style="color: #808080; font-style: italic; background-color: #f7faff;">5</span><span style="color: #808080; font-style: italic; background-color: #f7faff;">q326p2s74ui7n27gpu4@group.calendar.google.com</span>'<span style="background-color: #f7faff;">, </span><span style="color: #660000; background-color: #f7faff;">$rule</span><span style="background-color: #f7faff;">);</span></pre>
<p>4) In the &nbsp;Google Calendar window of logged user add this calendar to the list of users calendars.</p>
<p><img src="/uploads/9c5712b9c9.jpg" alt="" /></p>
---
title: Yii setFlash not working.
slug: yii-setflash-not-working
date: 2015-09-30T15:07:37Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - yii
 - setFlash
 - issue
 - yii issue

---
<p>This is the a very frequent question to Google (<a href="https://www.google.com.ua/webhp?sourceid=chrome-instant&amp;ion=1&amp;espv=2&amp;ie=UTF-8&amp;client=ubuntu#q=yii%20setflash%20not%20working">example</a> )</p>
<p>I lost a day to found the reason. And I'm sure that in 90% of cases the reason is incorrect use of session_start() and session_write_close() somewhere in the code above.</p>
<p>You're welcome!</p>
<p>&nbsp;</p>
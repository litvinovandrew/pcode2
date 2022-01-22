---
title: Workstation identification research
slug: workstation-identification-research
date: 2015-01-06T16:35:46Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - Workstation identification
 - research
 - browser fingerprint

---
<div>After researching on how to uniquely identify workstation of the site user, we made next conclusions:</div>
<div>&nbsp;</div>
<div>1) Cookies way</div>
<p>1.1 Cookies and/or local Web storage - works only for one browser. Users can mark current browser as "trusted" and log in simple way (by "login" and "password"). Other browsers on current workstation will be recognized as new and user will have to pass more complicated "three questions" procedure. After that new browser will be added to the list of "trusted browsers" on the server.&nbsp;</p>
<div>&nbsp;</div>
<div>Advantage: simple realization, no third part libraries needed</div>
<div>Disadvantage : Cookies Local Web Storage data can be cleared and in this case browser will be recognized as a "new" one. Cookies also can be fabricated.&nbsp;</div>
<div>
<div>&nbsp;</div>
<div>1.2 Third party library - for example <a href="https://github.com/samyk/evercookie">https://github.com/samyk/evercookie</a>&nbsp;- is a javascript API that produces extremely persistent cookies in a browser. Its goal is to identify a client even after they've removed standard cookies, Flash cookies (Local Shared Objects), and others</div>
<div>&nbsp;</div>
<div>Advantage: extremely persistent cookies&nbsp;</div>
<div>Disadvantage: extra library to &nbsp;support, extra data should be loaded &nbsp;every time when user not logged in.</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div>2) Java Applet way</div>
<div>Java applet that will have access to the workstation's hardware. Applet should be signed .&nbsp;</div>
<div>&nbsp;</div>
<div>Advantage - the most efficient way for uniquely identification.</div>
<div>Disadvantage - to create workstation ID (based on the hardware parameters) &nbsp;user have to allow downloading of such application and it execution. Every time when user wants to add workstation to "trusted" - &nbsp;application should be executed.&nbsp;For Java applet - Java Virtual Machine should be installed.</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div>3) Browser public information way.</div>
<div>Every browser sends to server a lot of information, so &nbsp;there is a way to collect information about client's:&nbsp;operation system, browser type and version, time zone, screen size and color depth and others.</div>
<div style="color: #222222; font-family: arial, sans-serif; font-size: small; text-align: justify;">We can store this data on the server. After user log in we will compare his info with stored and "three questions" procedure will be called for new one.<span style="font-size: 13px; color: #000000;"> &nbsp;</span></div>
<div style="color: #222222; font-family: arial, sans-serif; font-size: small; text-align: justify;">&nbsp;</div>
<p><span style="font-size: 13px; color: #000000;">&nbsp;</span></p>
</div>
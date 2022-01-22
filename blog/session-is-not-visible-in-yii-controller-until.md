---
title: $_SESSION is not visible in Yii controller until
slug: session-is-not-visible-in-yii-controller-until
date: 2015-07-22T07:19:29Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - yii
 - controller
 - session

---
<p>it has :&nbsp;</p>
<pre>/**<br /> * @return array action filters<br /> */<br />public function filters()<br />{<br />    return array(<br />        'accessControl', // perform access control for CRUD operations<br />        'postOnly + delete', // we only allow deletion via POST request<br />    );<br />}</pre>
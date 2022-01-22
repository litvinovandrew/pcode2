---
title: SugarCRM BPM
slug: sugarcrm-bpm
date: 2020-10-01T12:43:37Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:paragraph -->
<p>This post is for you if you every time looking why SugarBPM is not working. If every time you need to remember what shcedulers and cron kobs used in the SugarCRM BPM . </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So my answer is  following : you need to check two jobs in the job_queue table </p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>"SugarBPM Email Queue" class::SugarJobSendAWFEmail</li><li>"SugarBPM&#x2122; Scheduled Job" function::PMSEEngineCron</li></ol>
<!-- /wp:list -->
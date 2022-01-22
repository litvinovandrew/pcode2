---
title: Amazon Web Server  and SMS
slug: amazon-web-server-and-sms
date: 2015-01-06T14:08:14Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - AWS
 - SMS
 - Amazon

---
<p style="box-sizing: border-box; margin: 0px 0px 0.8em; color: #333333; font-family: HelveticaNeue, Helvetica, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 22.3999996185303px;">Here are a few important facts about our new SMS support:</p>
<ul style="box-sizing: border-box; padding: 0px; margin: 0px 0px 15px 30px; color: #333333; font-family: HelveticaNeue, Helvetica, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 22.3999996185303px;">
<li style="box-sizing: border-box;">Every AWS account can send up to 100 SMS messages each month at no charge. There is a $0.75 charge for each 100 messages thereafter.</li>
<li style="box-sizing: border-box;">Message recipients must reply via SMS in order to confirm a new subscription to a topic.</li>
<li style="box-sizing: border-box;">Messages can be sent to 10 digit US phone numbers. We plan to support phones in Canada and other countries in the future.</li>
<li style="box-sizing: border-box;">This feature is initially available in the US East (Northern Virginia) Region. Again, we&rsquo;ll roll out support for other Regions over time.</li>
<li style="box-sizing: border-box;">Each message is prefixed by the first 10 characters of the&nbsp;<em style="box-sizing: border-box;">Display Name</em>&nbsp;of the SNS topic and the &ldquo;&gt;&rdquo; character. if your topic&rsquo;s Display Name is &ldquo;Alerts&rdquo; the prefix will be &ldquo;Alerts&gt;&rdquo;.</li>
<li style="box-sizing: border-box;">Messages are limited to a total of 140 ASCII or 70 Unicode&nbsp;<em style="box-sizing: border-box;">characters</em>. Be sure to take the message prefix in to account when defining your application&rsquo;s messages.</li>
<li style="box-sizing: border-box;">Message recipients can text &ldquo;STOP&rdquo; or &ldquo;QUIT&rdquo; to 30304 to unsubscribe from all topics and to stop SMS deliveries. Subscriptions can also be managed from the AWS Management Console and the SNS API. Recipients can also text &ldquo;HELP&rdquo; to receive contact information and other assistance.</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/aws/amazon-simple-notification-service-now-supports-sms/">https://aws.amazon.com/blogs/aws/amazon-simple-notification-service-now-supports-sms/</a></p>
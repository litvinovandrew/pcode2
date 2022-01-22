---
title: SugarCRM App
slug: sugarcrm-app
date: 2019-10-28T16:59:13Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:list -->
<ul><li>installed yarn </li><li>installed nvm</li><li>installed sugarcrm sdk - downloaded from https://mobiletools.sugarcrm.com/</li><li>added SUGAR_MOBILE_SDK_HOME global <br>
https://support.sugarcrm.com/Documentation/Mobile_Solutions/Mobile_SDK/Mobile_SDK_Quick_Start_Guide/#Overview</li><li>registered on https://developer.android.com/</li><li>downloaded Android Studio https://developer.android.com/studio<br>
./android-studio/bin/studio.sh</li><li>using keytool from Android Studio generated Signing Certificate <br>
keytool -genkey -v -keystore my-release-key.keystore -alias key -keyalg RSA -keysize 2048 -validity 10000</li><li>updated App Configuration File</li><li>install a lot of additional tools like "Gradle" etc sudo apt-get install gradle</li><li>configured JAVA_HOME to use the one downloaded together with Android Studio</li><li>downloaded Android image</li><li>built demo app<br>
./sdk init-native<br>
./sdk build -p android </li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Debug: <br>
./sdk debug --debug-host http://localhost:9090 --site-url http://172.21.0.29</p>
<!-- /wp:paragraph -->
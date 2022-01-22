---
title: quick angular install ubuntu without sudo
slug: quick-angular-install-ubuntu-without-sudo
date: 2018-02-01T18:23:29Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - nodejs
 - npm
 - angular

---
<p>1)</p>
<p><span style="color: #d1edff; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace; font-size: 15.2px; background-color: #0f192a;">curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -</span></p>
<p>2)</p>
<p><span style="color: #d1edff; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace; font-size: 15.2px; background-color: #0f192a;">sudo apt-get install nodejs</span></p>
<p>3)</p>
<p>mkdir ~/node</p>
<p>4)</p>
<pre>npm config set prefix=$HOME/node</pre>
<p>Then, edit your&nbsp;.profile&nbsp;or&nbsp;.bashrc&nbsp;file to add this command:</p>
<pre>export PATH=$HOME/node/bin:$PATH<br /><br />5)<br />npm install @angular/cli<br /><br />6)<br />ng new my-app<br />cd my-app</pre>
<p>7)</p>
<p>ng serve --open</p>
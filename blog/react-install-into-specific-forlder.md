---
title: React install into specific forlder
slug: react-install-into-specific-forlder
date: 2018-09-30T17:13:58Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
1. Install Node.js
<code> sudo apt-get install nodejs
sudo ln -s /usr/bin/nodejs /usr/bin/node
mkdir ~/node
sudo apt install npm
</code>
2. Set npm to use folder in the home directory, in order not use "sudo" and not to have file permission issues 
<code>mcedit .profile</code>
add to .profile  : export PATH=~/node/bin:$PATH
<code>
source .profile 
npm config set prefix=$HOME/node
</code>

3)
<code>mkdir ~/projects/react
cd ~/projects/react
npm init -y
npm install create-react-app .
create-react-app my-app
</code>



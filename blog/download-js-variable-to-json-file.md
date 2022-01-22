---
title: Download JS variable to JSON file
slug: download-js-variable-to-json-file
date: 2019-08-01T10:33:22Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:code -->
<pre class="wp-block-code"><code>1) Extend usual "console" object
(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>2) Execute downloading by :<br>console.save(temp1,'params.json');<br></p>
<!-- /wp:paragraph -->
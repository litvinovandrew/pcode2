---
title: Elasticsearch and Sugar. FORBIDDEN/12/index read-only
slug: elasticsearch-and-sugar-forbidden-12-index-read-only
date: 2020-10-08T09:06:11Z
header_img: /uploads/default.png
draft: false
featured: false
tags:
 - writing
---
<!-- wp:paragraph -->
<p>We have found the issue when Sugar package was failde to install because of error <br>"blocked by: [FORBIDDEN/12/index read-only / allow delete (api)];"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We have found the solution here : </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://discuss.elastic.co/t/forbidden-12-index-read-only-allow-delete-api/110282/4">https://discuss.elastic.co/t/forbidden-12-index-read-only-allow-delete-api/110282/4</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://discuss.elastic.co/t/why-am-i-seeing-a-forbidden-12-index-read-only-allow-delete-response-against-my-index/244344">https://discuss.elastic.co/t/why-am-i-seeing-a-forbidden-12-index-read-only-allow-delete-response-against-my-index/244344</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://stackoverflow.com/questions/50609417/elasticsearch-error-cluster-block-exception-forbidden-12-index-read-only-all">https://stackoverflow.com/questions/50609417/elasticsearch-error-cluster-block-exception-forbidden-12-index-read-only-all</a><br></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So do the following : </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>1) Delete already existing  Indexes related to  package<br>curl -XDELETE  <a rel="noreferrer noopener" href="http://172.21.0.6:9200/*_ca_*" target="_blank">http://172.21.0.6:9200/*_ca_*</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><br>2) Allow indexes update<br>curl -XPUT -H "Content-Type: application/json" <a rel="noreferrer noopener" href="http://172.21.0.6:9200/_all/_settings" target="_blank">http://172.21.0.6:9200/_all/_settings</a> -d '{"index.blocks.read_only_allow_delete": null}'</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Where&nbsp; "<a href="http://172.21.0.6:9200" target="_blank" rel="noreferrer noopener">172.21.0.6:9200</a>" are settings from your admin panel</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="https://mail.google.com/mail/u/0?ui=2&amp;ik=375897c25c&amp;attid=0.0.2&amp;permmsgid=msg-a:r-5395886275514761276&amp;th=1750763837cef6c9&amp;view=fimg&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ8dEPTr9APxbizjCmowYI-WxnWCSNB-bBTfxb1-EZ9Qiz_8tZYMlQnLK9F0a8ymjHwyMtnHSdXAseioRs9Ph1Q21zHChtgzM3YruRI3806dmvmq5gc5GiQCvtQ&amp;disp=emb&amp;realattid=ii_kg0kl0x72" alt="image.png"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>3) install the package again</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
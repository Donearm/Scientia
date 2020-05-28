---
title: Curl
bookCollapseSection: true
weight: 611
---


## Various

+ `curl -C - -O url` = resume an interrupted download of `url`
+ `xargs -n 1 curl -O < listofurls.txt` = download a file list from a file, one by one
+ `curl -I www.url.com` = get HTTP headers returning from a server
+ `curl --data "abc=123&def=456" http://url.com/info.php` = make a POST request by sending the `abc` and `def` parameters with `123` and `456` values to the server
+ `curl --user-agent "User Agent string"` = specify an User Agent string
+ `curl --cookie-jar cookies.txt http://www.url.com` = save cookies received from url in `cookies.txt`
+ `curl --cookie cookies.txt http://www.url.com` = send stored cookies in `cookies.txt` to url
+ `curl --resolve www.url.com:80:8.8.8.8 http://www.url.com` = use a different DNS server, in this example 8.8.8.8 on port 80, to resolve url

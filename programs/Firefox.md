For most of these info, thanks to the very complete [Mozillazine](http://kb.mozillazine.org/Category:Preferences)

### Useful URIs

* `about:buildconfig` = Shows info about the arguments used to compile this Firefox build and the various optimizations implemented
* `about:cache?device=memory` or `disk` = Show the list of all cache objects, on disk or in memory. From here it's possible to show or save every object
* `about:support` = Technical information for debugging Firefox, other than various links to other internal URIs

### Pipelining

Enabling of HTTP/1.1 pipelining

* `network.http.pipelining` = Set it to true
* `network.http.proxy.pipelining` = Set it to true

### Various tweaks

* `nglayout.initialpaint.delay` = Determines time in milliseconds to wait before an initial reflow attempt during page rendering
* `network.prefetch-next` = With false disable link prefetching, thus loading only the clicked upon elements of the page
* `config.trim_on_minimize = With true allows Windows to swap out memory when Firefox is minimized
* `browser.sessionhistory.max\_total\_viewer` = With 0 prevents Firefox to store pages in memory. Default is -1 which means the browser will automatically calculate how many pages to store (usually between 0 and 8 depending on how much Ram is available)
* `browser.cache.disk.capacity` = Amount of disk space allowed for the browser's cache. Default is 50000
* `browser.cache.memory.capacity` = Amount of ram space allowed for the browser's cache. -1 means set it automatically, 0 disable it and another numeric value sets it to that value (in kB)
* `network.http.max-connections` = Determines the maximum number of simultaneous HTTP connections. Default is 30. Valid values are between 1 and 65535
* `network.http.max-persistent-connections-per-server` = Maximum number of HTTP keep-alive connections per single server. Default is 6
* `content.notify.ontimer` = Enable other options under `content.`
* `content.interrupt.parsing` = Enable other options under `content.`
* `content.notify.interval = The minimum number in microseconds between reflows. Default is 120000. Lowering it will lower the perceived page loading time but increase the total loading time, especially on slower connection. Values below 100000 have a significant impact on performances and are not recommended
* `ui.submenuDelay` =  Determines the delay in milliseconds between hovering over a menu option with a submenu and the submenu appearing. If this preference is not set, the OS's value is used. 0 disables it
* `browser.search.openintab` = Open search results from the Search Bar in a new tab if true. Default is false 
* `gfx.color_management.enabled` = If true, enable color management (and supposedly the quality of images). Default is false
* `browser.download.manager.scanWhenDone` = Scan for viruses downloaded files. Default is true. False disables it (on Linux could be disabled, gaining some milliseconds in UI responsiveness)
* `browser.cache.check_doc_frequency` = How often to check the remote page for a newer version. Default is 3, thus automatically determined. 0 means to check once per browser session. 1 every time I view the page and 2 to never check (always use the cached page)
* `network.dns.disableIPv6` = Determines whether to perform IPv6 name lookups. True disable them (default on OSX), while false enable (default on Windows and Linux)
* `browser.ctrlTab.previews` = Enables showing a snapshot of the page when browsing tabs with `Ctrl+Tab`. Default is false
* `browser.tabs.animate` = With false, disable any animation when switching tabs, thus making the UI more responsive. Default is true

### Tweak mouse wheel speed

* `mousewhell.withnokey.numlines` = The number of lines the page moves with one click of the scroll wheel. Default is 6
* `mousewheel.withnokey.sysnumlines` = With false, make Firefox ignore the speed of the mouse wheel chosen by the OS. Default is true

### AwesomeBar tweaks

	places.frecency.linkVisitBonus 100
	places.frecency.typedVisitBonus 2000
	places.frecency.bookmarkVisitBonus 150
	places.frecency.embedVisitBonus 0
	places.frecency.downloadVisitBonus 0
	places.frecency.permRedirectVisitBonus 0
	places.frecency.tempRedirectVisitBonus 0
	browser.urlbar.maxRichResults 12

### Disable compatibility check for extensions


To force compatibility between a newer Firefox version and a not yet updated extension, add two booleans:

	extensions.checkUpdateSecurity  
	extensions.checkCompatibility  

and set both to false. It could be needed to add another boolean, false too, like:

	extensions.checkCompatibility.3.6b

where 3.6b is the installed Firefox version

### Keyboard shortcuts

* `Ctrl+Tab` = rotate forward among tabs
* `Ctrl+Shft+Tab` = rotate to the previous tab
* `Ctrl+1-9` = choose a number to jump to a specific tab
* `Ctrl+Up/Down` = change to next/previous search plugin when the search bar is selected (usually with Ctrl+k)

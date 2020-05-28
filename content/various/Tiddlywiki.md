---
title: Tiddlywiki
bookCollapseSection: true
weight: 855
---

## Tweaks and features of Tiddlywiki

[Tiddlywiki markup list](http://tiddlywiki.org/bags/tiddlywiki_public/tiddlers/TiddlyWiki%20Markup.html)

### To use the file browser to insert a file into the wiki

This:

    <html><div align="left"><FORM name=form1><INPUT type=file name=cmuds> <INPUT onclick="whatFile()" type=button value=OpenFile name=button></FORM></div><br></html>

or this:

    <html>
	    <form target="theFrameID">
	    <input type=file name=whichfile>
	    <input type=button value="View"
		    onclick="var frame=document.getElementById(this.form.target);
			    this.form.action='file:///'+this.form.whichfile.value;
			    try { frame.style.display='block'; this.form.done.disabled=false; this.form.submit(); }
			    catch(e) { alert(e.description?e.description:e.toString()); }">
	    <input type=button name=done value="Done" disabled 
		    onclick="var frame=document.getElementById(this.form.target);
			    frame.style.display='none'; this.disabled=true;">
	    </form>
	    <iframe src="" name="theFrameID" id="theFrameID"
		    style="display:none;background:#fff;width:100%;height:500px">
	    </iframe>
    </html>

### To show a text file with an iframe

    <html><iframe src ="file:///C:\Users\Owner\Documents\testingtesting2.txt" width="50%" align="center" height="600"></iframe></html>

### To insert an image

    <html><img src="path/to/image" width="50%" height="40%"></html>

### To directly install a plugin

Copy the javascript code of the plugin in a new tiddler, titled as the plugin and tagged only as `systemConfig`. After a restart, it'll be loaded

### Export tiddlers as pdf/ps

Simply use the "print to file" function of the browser. It'll export all the currently opened tiddlers

### Show Tiddlywiki version number

Open a new tiddler, type `<<version>>` in it and close it. Its text will be the version number of the current tiddlywiki

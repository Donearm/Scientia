---
title: Technical Writing
weight: 1210
---

<!-- vim-markdown-toc GFM -->

* [Tools](#tools)
	* [Confluence](#confluence)
		* [Useful Macros/Plugins](#useful-macrosplugins)
		* [Content reusing in Confluence](#content-reusing-in-confluence)
		* [Tips](#tips)
	* [Help & Manual](#help--manual)
	* [MadCap Flare](#madcap-flare)
	* [RoboHelp](#robohelp)
	* [Scribus](#scribus)
	* [Framemaker](#framemaker)
* [Good practices and procedures](#good-practices-and-procedures)
	* [Developing a Doc Plan](#developing-a-doc-plan)

<!-- vim-markdown-toc -->

---------------

## Tools

### Confluence

Often used for internal documentation, Confluence is an ok-ish tool for technical documentation. It has its quirks but lots of macros/plugins to customize the appearance of the content, and better format it.

#### Useful Macros/Plugins

* Colgroup Tag + Column = great at showing two variants of code next to each other, it embeds the content into multiple columns. No header is supported but it can easily be added manually and formatted as desired.
* Tabs Container + Tabs Page = alternatively to columns, when different version of similar content aren't necessarily needed to be shown together, tabs can be used. This macro support headers and will show like browser's tabs. Not much in the way of customization by default but CSS code is supported.
* Section + Column = a default option to have the page's layout split into columns.

#### Content reusing in Confluence

Multiple possibilities exist:

* Include macro = can include a whole page into another.
* Excerpt and Excerpt-Include macros = can include pieces of content into another page. The big limitation is that content can be included only once.
* Multiexcerpt macro = works as the Excerpt macro above but doesn't have the limitation of only including the content once.

An useful tip to organize content for reusing is to have a page per excerpt 
under the root of the wiki, not under any space to hid the page from searches. 
A special title, like a prepended underscore, can be used to differentiate 
these pages from the others. The Include macro can then be used to include 
content from this sort of mini-library of excerpts elsewhere.

All the excerpt macros can be set to `hidden` to hid them in the page where 
they are created but not from the page where they are included.

#### Tips

* Categories are best used to connect and group similar spaces together.
* Space and page layouts work with the Apache's [Velocity template engine](https://velocity.apache.org).

### Help & Manual

[Help & Manual](http://helpandmanual.com/) is an XML-based help authoring tool for writing help/manual pages.

### MadCap Flare

One of the main editor for technical writers, [MadCap Flare](http://www.madcapsoftware.com/) is only a part of a suite of tools for helping writers creating single-source documentation.

### RoboHelp

[Adobe RoboHelp](http://www.adobe.com/products/robohelp.html) is Adobe's effort for an help authoring tool.

### Scribus

As an open source tool, [Scribus](https://www.scribus.net/) is one of the most widespread. It is an XML-based software, which can import and export to multiple formats.

### Framemaker

Another Adobe tool, [Framemaker](http://www.adobe.com/products/framemaker) is specifically designed to handle a large amount of documents, structured or not.

## Good practices and procedures

### Developing a Doc Plan

At the beginning of a project of any size, writing down a Doc Plan to help starting it out and following a fixed schedule. The plan will consists of:

* **Product Description**: a brief summary of the product
* **Audience**: the audience the documentation is aimed to
* **Deliverables**: name, format and descriptions of all documents, including media files if present, that will be created
* **Receivables**: what you as a writer need from others (accesses, product versions, availability of experts that can answer your questions, templates etc.)
* **Style**: what style guidelines will be followed
* **Tasks**: list of actions required to complete the project and who is responsible for each of them
* **Tools**: what tools will be used
* **Schedules**: one for each deliverable

Optionally, and especially when working for external clients, these points can be necessary as well:

* **Copyright**: who will own the copyright of the completed content
* **Cost**: a breakdown of the costs for each deliverable
* **Disclaimer**: add one that states that the ultimate responsibility for the accuracy of the content is of the client and/or developers
* **Terms**: payment schedule, cancellation policy and other legal terms

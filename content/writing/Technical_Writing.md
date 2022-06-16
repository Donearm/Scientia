---
title: Technical Writing
weight: 1210
---

<!-- vim-markdown-toc GFM -->

* [Books](#books)
	* [Writing and Technical Writing books](#writing-and-technical-writing-books)
	* [Styling and Designing Content books](#styling-and-designing-content-books)
* [Tools](#tools)
	* [Confluence](#confluence)
		* [Useful Macros/Plugins](#useful-macrosplugins)
		* [Content reusing in Confluence](#content-reusing-in-confluence)
		* [Tips](#tips)
	* [Help & Manual](#help--manual)
	* [MadCap Flare](#madcap-flare)
	* [Oxygen](#oxygen)
	* [SDL Triton](#sdl-triton)
	* [RoboHelp](#robohelp)
	* [Scribus](#scribus)
	* [Framemaker](#framemaker)
		* [Default DITA xml elements available in Framemaker](#default-dita-xml-elements-available-in-framemaker)
		* [How to change background colour of a paragraph](#how-to-change-background-colour-of-a-paragraph)
	* [Paligo](#paligo)
	* [Booktype](#booktype)
	* [Clickhelp](#clickhelp)
	* [HelnNDoc](#helnndoc)
	* [Markdoc](#markdoc)
* [Good practices and procedures](#good-practices-and-procedures)
	* [Developing a Doc Plan](#developing-a-doc-plan)

<!-- vim-markdown-toc -->

---------------

## Books

### Writing and Technical Writing books

* **Information Architecture** by Peter Morville at al.
* **Business Writing for Technical People** by Carrie Marshall
* **A Guide to Writing as an Engineer** by David F. Beer, David A. McMurrey
* **Docs for Developers: An Engineer's Field Guide to Technical Writing** by Jared Bhatti
* **Technical Editing: The Practical Guide for Editors and Writers** by Judith A. Tarutz
* **The Product is Docs** by Christopher Gales and the Splunk documentation team
* **Modern Technical Writing: An Introduction to Software Documentation** by Andrew Etter
* **Revising Business Prose** by Richard Lanham
* **Untechnical Writing** by JoAnn T. Hackos
* **Technical Writing Process** by Kieran Morgan
* **The Insider's Guide to Technical Writing** by Krista Van Laan

### Styling and Designing Content books

* **Read Me First! A Style Guide for the Computer Industry** by the Sun Microsystems Press
* **Don't Make Me Think: A Common Sense Approach to Web Usability** by Steve Krug
* **The Design of Everyday Things** by Donald Norman
* **The Elements of Style** by William Strunk Jr.

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

### Oxygen

A suite of tools to create documentation from XML files. The main one is the [XML Editor](https://www.oxygenxml.com).

### SDL Triton

A [web content manager](https://www.rws.com/content-management/tridion/), semantic AI search and all around solution for content management.

### RoboHelp

[Adobe RoboHelp](http://www.adobe.com/products/robohelp.html) is Adobe's effort for an help authoring tool.

### Scribus

As an open source tool, [Scribus](https://www.scribus.net/) is one of the most widespread. It is an XML-based software, which can import and export to multiple formats.

### Framemaker

Another Adobe tool, [Framemaker](http://www.adobe.com/products/framemaker) is specifically designed to handle a large amount of documents, structured or not.

#### Default DITA xml elements available in Framemaker

* Topic = an element that consists of a single, self-contained subject matter. 
* Concept = generally speaking, the Concept element can be considered as a 
  "specialized topic". It should be used when trying to answer all that is 
  necessary to do or achieve something, in a descriptive, usually, way.
* Task = as with the Concept, a task is a specialized topic that answers how, 
  procedurally, a task can be accomplished. It is more practical-oriented than 
  a Concept and usually doesn't include background info, as instead the Concept 
  does.
* Reference = another specialized topic, it differs from both the Concept and 
  Task as it neither provides background info or a step by step lists of 
  practical actions. It is meant to show general information about a topic that 
  can be useful, without explaining a specific task or topic, but being largely 
  just informative.

All the above elements are inserted into a new DITA xml file by selecting **New 
DITA File** in the menu and choosing the desired element from the submenu.

#### How to change background colour of a paragraph

1. Select the paragraph
2. Open the Paragraph Designer (Ctrl+M)
3. Go to the **advanced** tab
4. Change the colour, default is none, in the bottom right, under **Pgf. Box**

The colour will be by default applied to all the successive paragraphs. Set it 
back to none to cancel this.

### Paligo

An XML-based, [web](https://paligo.net) CCMS for technical documentation.

### Booktype

An open source publishing software. Web-based, it is still [available for 
download](https://www.sourcefabric.org/software/booktype) but it is not 
actively developed anymore.

### Clickhelp

A single-sourcing web-based documentation tool, with a large range of 
[features](https://clickhelp.com/online-software-documentation-tool/).

### HelnNDoc

A french publishing software, [free for personal 
use](https://www.helpndoc.com/), but only for Windows.

### Markdoc

A content authoring [tool](https://markdoc.io) based off pure markdown files. 
It powers the praised Stripe documentation.

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

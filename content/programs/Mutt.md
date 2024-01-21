---
title: Mutt
bookCollapseSection: true
weight: 630
---
<!-- vim-markdown-toc GFM -->

* [General Commands](#general-commands)
* [Keybindings](#keybindings)
    * [The Message Index  (browsing through mailbox)](#the-message-index--browsing-through-mailbox)
    * [The Pager (reading an email)](#the-pager-reading-an-email)
    * [Composer (setting the send options for an email)](#composer-setting-the-send-options-for-an-email)
* [Arguments](#arguments)
* [Highlight according to a pattern](#highlight-according-to-a-pattern)

<!-- vim-markdown-toc -->

-------------

## General Commands

* `q(x)`	= exit the current menu (abort without saving)
* `^g`		= cancel current action
* `?`		= list all keybindings for the current menu

## Keybindings

### The Message Index  (browsing through mailbox)

* `m`		= compose a new message
* `d(D)`	= delete the current message (matching a pattern)
* `u(U)`	= undelete-message (matching a pattern)
* `C(ALT C)` = copy the current message to another mailbox (decode first)
* `s(ALT s)` = save-message (decode first)
* `r(g)  (L)` = reply to sender (all recipients) (reply to mailing list)
* `f(b)`	= forward message (bounce) 
* `/(ALT /)` = search  (search-reverse) 
* `c`		= change to a different mailbox/folder 
* `F(N)`	= mark as important (new) 
* `l`		= show messages matching a pattern 
* `o(O)`	= change the current sort method (reverse sort) 
* `t(ALT t)` = toggle the tag on a message (entire message thread) 
* `T(^t)`	= tag messages matching a pattern (untag) 
* `v`		= view-attachments 
* `<Return>` = display-message 
* `<Tab>`	= jump to the next new message 
* `@`		= show the author's full e-mail address 
* `$`		= save changes to mailbox 
* `^l`		= clear and redraw the screen 
* `ALT k`	= mail a PGP public key to someone 

### The Pager (reading an email)

* `<Return>`  = go down one line 
* `<Space>(-)` = display the next page/message (previous) 
* `^($)`	= jump to the top (bottom) of the message 
* `/(ALT /) (n)` = search for a regular expression (search backwards) (next match) 
* `\`		= toggle search pattern coloring 
* `S(T)`	= skip beyond quoted text (toggle display of quoted text) 
 
### Composer (setting the send options for an email)
 
* `y(P)(w)` = send the message  (postpone)  (write to folder) 
* `i`		= check spelling, if available 
* `a(A)(D)` = attach a file  (attach message)  (detach) 
* `d`	= edit description on attachment 
* `t(ALT f)` = edit the To field (From field) 
* `c(b)`	= edit the Cc field (Bcc field) 
* `s`	= edit the Subject 
* `r`	= edit the Reply-To field 
* `p`	= select PGP options 
* `ALT k` = attach a PGP public key 
* `^f` = wipe PGP passphrase from memory 
* `f`	= specify an 'Fcc' mailbox i.e. sent folder

`^g` means CTRL and the g key. `ALT f` means ALT and the f key.								
If you do not have an ALT key then use ESC then key. Do not type the brackets.								

## Arguments

* `-H file` = Use a file as a model for a new message, taking both headers and body. Very useful for sending patches generated with `git format-patch`

## Highlight according to a pattern

You can play with these for a start (probably want to get rid of
`~x \@`\``hostname`\` stuff):

```cfg
~F
```

Flagged as !  color index cyan default 

```cfg
 ~Q   (~Q ~x \@`hostname`)
 ```

Replied to  color index yellow default

```cfg
~p   (~p ~x \@`hostname`)   (~x \@`hostname`)
```

Answers to my mails  color index magenta default 

```cfg
~P   (~P ~x \@`hostname`)
```

Answered by myself  color index green default

```cfg
~N (~P ~p ~Q ~x \@`hostname`)
```

New concerning myself  color index red default

## Tagging

TagPatterns

```cfg
T ~m 1-700
```
	
to mark messages from 1 to 700

```cfg
T ~d 01/1/2006-24/2/2006
```

to mark messages in that time span

```cfg
T ~d >1d
```

to mark messages older than 1 day (use `d` for days, `w` for weeks, `m` for months and `y` for years)

## See what charset is being used

In mutt, type `:set &charset ?charset`

## Macros

```cfg
macro index,pager d "<save-message>=MAILBOX<enter><enter>" "Trash"
```

Move message in "MAILBOX", which should correspond to the trash one of the inbox. For GMail it would be "[Gmail]/Trash"

```cfg
macro index A "WNK<save-message>=MAILBOX<enter>" "Archive"
```

Archive a message, marking it as read and moving to a generic inbox (for GMail it will be "[Gmail]/All Mail)

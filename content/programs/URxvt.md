---
title: URxvt
bookCollapseSection: true
weight: 631
---

### Change charset on the fly

	printf '\33]701;%s\007' it_IT.~UTF-8

### Change font on the flye

	printf '\33]50;%s\007' 9x15,xft:Kochi" Mincho"

### Insert an Unicode characters with its hexadecimal code

press together `<Ctrl>` and `<Shift>` and insert the code, then release both. To insert more than one character at once, use a space between a code and another while still keeping `<Ctrl>` and `<Shift>` pressed

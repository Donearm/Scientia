---
title: Compose Key
bookCollapseSection: true
weight: 515
---


This is not a Shift key, but is used to signal the operating system that the next two key strokes are to be taken as a code for something else. Thus the sequence Compose + a + e will produce æ.

Some computers (e.g. those from Sun) have a Compose key on their keyboard, but for a PC you must nominate a spare key: one of the Windows keys is the natural choice.

From a desktop like Gnome or KDE, the choice can be made with the system menu. Alternatively, the command xmodmap can be used to define the key (as Multi\_key). In general (apart from any desktop being used), the Compose key can be specified in the "Input Device" section of the `/etc/X11/xorg.conf` file. For instance, the following sets the "right windows" key to be the Compose key:

```xorg.conf
Option      "XkbOptions"  "compose:rwin"
```

Or, perhaps better, this remaps the "Menu" key, usually found between right Windows and right Control keys, to be the Compose key:

```xorg.conf
Option "XkbOptions" "compose:menu"
```

A list of compose sequences is in the file `/usr/share/X11/locale/en_US.·UTF-8/Compose`. Unfortunately, this includes many sequences which may not actually work.
The command `dumpkeys` should show what are the possible combinations under the "compose" voices

Some examples: to get accented letters, use

* grave, tilde, circumflex keys
* apostrophe for the acute
* double-quote for the dieresis
* period for the over-dot
* comma for both the cedilla and ogonek
* hyphen gives a tilde with ‘aon’ but a macron with ‘eiu’ 

Other combinations are

```txt
aa for å
-d for đ
.i for ı
.I for İ
ng for ŋ
/o for ø
ss for ß
th for þ
ae for æ
oe for œ
oc for ©
e= for €
p! for ¶
so for §
-y for ¥
!! for ¡
?? for ¿
<< for «
>> for »
/c for ¢
_a for ª
_o for º
<’ for ‘
>’ for ’
^0 for °
^2 for ²
xx for ×
-: for ÷
+- for ±
```

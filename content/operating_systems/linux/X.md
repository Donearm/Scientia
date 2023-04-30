---
title: Xorg
bookCollapseSection: true
weight: 560
---

<!-- vim-markdown-toc GFM -->

* [Keyboard shortcuts using the Multi\_key](#keyboard-shortcuts-using-the-multi_key)
* [Xinput](#xinput)
* [Keys combination available to use in X](#keys-combination-available-to-use-in-x)

<!-- vim-markdown-toc -->

### Keyboard shortcuts using the Multi\_key

Multi\_key is a special key that permit to generate various symbols when pressed along with one or more other keys. If it's not already mapped in the current keymap, use `xmodmap -e "keycode xxx = Multi\_key"` where `xxx` is the keycode furnished by `xev`. Read `/usr/share/X11/locale/current_locale/Compose` to know which keyboard shortcuts can be used and their results.

Or read the full list on the [web](http://www.hermit.org/Linux/ComposeKeys.html)

### Xinput

Very useful tool to get more informations about input devices (keyboards, mice etc.). A few commands:

+ `xinput list` = lists all devices with their IDs. Those are then used to get specific informations about a single device
+ `xinput get-button-map <id>` = returns a list of buttons of a device (mouse)
+ `xinput list-props <id>` = returns detailed informations about a device

### Keys combination available to use in X

All these combinations and more can be read at `man xkeyboard-config`.

| Option				   |	 Description																 |
| grp:menu_switch          |  Menu (while pressed), Shift+Menu for Menu                                      |
| grp:caps_switch          |  Caps Lock (while pressed), Alt+Caps Lock for the original Caps Lock action     |
| grp:rctrl_switch         |  Right Ctrl (while pressed)                                                     |
| grp:toggle               |  Right Alt                                                                      |
| grp:lalt_toggle          |  Left Alt                                                                       |
| grp:caps_toggle          |  Caps Lock                                                                      |
| grp:shift_caps_toggle    |  Shift+Caps Lock                                                                |
| grp:caps_select          |  Caps Lock to first layout; Shift+Caps Lock to second layout                    |
| grp:win_menu_select      |  Left Win to first layout; Right Win/Menu to second layout                      |
| grp:ctrl_select          |  Left Ctrl to first layout; Right Ctrl to second layout                         |
| grp:alt_caps_toggle      |  Alt+Caps Lock                                                                  |
| grp:shifts_toggle        |  Both Shifts together                                                           |
| grp:alts_toggle          |  Both Alts together                                                             |
| grp:alt_altgr_toggle     |  Both Alts together; AltGr alone chooses third level                            |
| grp:ctrls_toggle         |  Both Ctrls together                                                            |
| grp:ctrl_shift_toggle    |  Ctrl+Shift                                                                     |
| grp:lctrl_lshift_toggle  |  Left Ctrl+Left Shift                                                           |
| grp:rctrl_rshift_toggle  |  Right Ctrl+Right Shift                                                         |
| grp:ctrl_alt_toggle      |  Alt+Ctrl                                                                       |
| grp:alt_shift_toggle     |  Alt+Shift                                                                      |
| grp:lalt_lshift_toggle   |  Left Alt+Left Shift                                                            |
| grp:ralt_rshift_toggle   |  Right Alt+Right Shift                                                          |
| grp:menu_toggle          |  Menu                                                                           |
| grp:lwin_toggle          |  Left Win                                                                       |
| grp:alt_space_toggle     |  Alt+Space                                                                      |
| grp:win_space_toggle     |  Win+Space                                                                      |
| grp:ctrl_space_toggle    |  Ctrl+Space                                                                     |
| grp:rwin_toggle          |  Right Win                                                                      |
| grp:lshift_toggle        |  Left Shift                                                                     |
| grp:rshift_toggle        |  Right Shift                                                                    |
| grp:lctrl_toggle         |  Left Ctrl                                                                      |
| grp:rctrl_toggle         |  Right Ctrl                                                                     |
| grp:sclk_toggle          |  Scroll Lock                                                                    |
| grp:lctrl_lwin_rctrl_menu|  Ctrl+Left Win to first layout; Ctrl+Menu to second layout                      |
| grp:lctrl_lwin_toggle    |  Left Ctrl+Left Win   															 |

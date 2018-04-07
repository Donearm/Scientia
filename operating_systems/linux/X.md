###Keyboard shortcuts using the Multi\_key

Multi\_key is a special key that permit to generate various symbols when pressed along with one or more other keys. If it's not already mapped in the current keymap, use `xmodmap -e "keycode xxx = Multi\_key"` where `xxx` is the keycode furnished by `xev`. Read `/usr/share/X11/locale/current_locale/Compose` to know which keyboard shortcuts can be used and their results.

Or read the full list on the [web](http://www.hermit.org/Linux/ComposeKeys.html)

###Xinput

Very useful tool to get more informations about input devices (keyboards, mice etc.). A few commands:

+ `xinput list` = lists all devices with their IDs. Those are then used to get specific informations about a single device
+ `xinput get-button-map <id>` = returns a list of buttons of a device (mouse)
+ `xinput list-props <id>` = returns detailed informations about a device

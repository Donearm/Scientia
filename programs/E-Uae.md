Keyboard shortcuts to save game state. It could be necessary to use F11 instead of F12 in some configurations

* `F12 + Numpad 0`					# Quick save emulator state.
* `F12 + Right Shift + Numpad 0`	# Quick load emulator state.
* `F12 + Numpad 1`					# Quick save emulator state to slot 1.
* `F12 + Right Shift + Numpad 1`	# Quick load emulator state from slot 1.
* `F12 + Numpad 'n'`				# Quick save emulator state to slot 'n'.
* `F12 + Right Shift + Numpad 'n'`	# Quick load emulator state from slot 'n'.

####Make an empty floppy (a file .adf)

To make a floppy DD image:

    dd if=/dev/zero of=blank.adf count=1760

To make a floppy HD image:

    dd if=/dev/zero of=blank.adf count=3520


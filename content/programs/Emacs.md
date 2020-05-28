---
title: Emacs
bookCollapseSection: true
weight: 612
---

## Movements

* `C-v` = Move forward of a screenful
* `M-v` = Move backwards of a screenful
* `C-l` = Center the screen on the cursor
* `C-f` = Move 1 character forward
* `C-b` = Move 1 character backward
* `M-f` = Go to next word
* `M-b` = Go to previous word
* `C-M-f` = Go to next s-expression (usually this means parentheses, quotes, colon, periods etc.)
* `C-M-b` = Go to the previous s-expression
* `C-n` = Go to next line
* `C-p` = Go to previous line
* `C-a` = Go to the beginning of current line
* `C-e` = Go to the end of current line
* `M-a` = Go to the beginning of phrase
* `M-e` = Go to the end of phrase
* `M-<` = Go back to the beginning of current file
* `M->` = Move forward till the end of current file
* `M-g g` = Go to a specific line number (to be inserted)
* `C-x r j a` = Go to the position saved in register "a"
* `M-r` = Alternatively jump between the top, the bottom and the middle of the current screen
* `C-M-a` = Go at the beginning of current or previous function
* `C-M-e` = Go at the end of current or previous function

## Basic commands

* `C-g` = Cancel the currently active command
* `C-x u` = Undo last command
* `C-x C-c` = Exit from Emacs
* `C-h` = Open the help for a command
* `C-s` = Find text forward
* `C-r` = Find text backward
* `C-s C-w` = Find forward the word where the cursor is
* `C-r C-w` = Find backward the word where the cursor is
* `C-x r a` = Save current position in a register "a"
* `C-x z` = Repeat last executed command. Pressing `z` repeats it again
* `C-h m` = Show info about current buffer's mode
* `C-h b` = Get all currently available key bindings grouped by modes
* `C-x C-e` = Execute the code where the cursor is at (it needs to be ELisp)

## Windows/Buffers

* `C-x 1` = Close all open windows but for the current
* `C-x o` = Jump between windows
* `C-u M-x shell` = Go to the buffer called *shell*
* `C-x C-b` = Show buffer list

## Editing

* `C-d` = Delete character after to the cursor
* `M-<Delete>` = Delete word before the cursor
* `M-d` = Delete word after the cursor
* `C-k` = Delete everything from the cursor till the end of line
* `M-k` = Delete the phrase from the cursor onward
* `C-<Space>` = Set a mark. The text between the mark and the cursor will be highlighted and can be then copied or cut
* `C-x C-x` = Switch position between the cursor and the previously set mark
* `C-y` = Paste from the clipboard
* `M-y` = Paste last deleted text. This, unlike the above, permits to paste also previously deleted text up until 4 deletions
* `C-w` = Cut text currently highlighted and copy it to the clipboard
* `M-w` = Paste highlighted text, without cutting it
* `C-x h` = Select the whole buffer
* `M-x auto-fill-mode` = Enable automatic text formatting
* `C-u 20 C-x f` = Set text margin to 20 rows
* `C-x f` = Restore text margin to the default value (70 rows)
* `M-q	`	= Format the current paragraph
* `C-x <Return> f` = Select the encoding for the current buffer
* `M-x re-builder` = Open the re-builder that allows to search with a regexp and see where it matches while typing
* `M-x tabify` = Convert whitespaces in tabs
* `M-x untabify` = Convert tabs in whitespaces
* `C-x 8` = Open the Unicode insertion mode. The hexadecimal code is needed. Press <Tab\> twice to see a full list. Alternatively, it's possible to directly insert with a combination of keys, like `C-x 8 ' e` for the é
* `M-x flush-lines` = Open the mode permitting to delete lines that matche a regexp
* `C-t` = Switch position between the character under and the one before the cursor
* `M-t` = Switch position between the word under and the one before the cursor
* `C-x C-t` = Switch position between the current and previous line
* `M-c` = Capitalize the first character of next word or the one under the cursor (if it's in the middle of a word)
* `M-x replace-string` = Open the replace string mode, to replace a string with another
* `M-x replace-regexp` = As above but allows the use of regexps

## Files

* `C-x C-f` = Open a file
* `C-x C-s` = Save a file
* `C-x i`	= Insert the content of a file at the current position

## Dired

* `M-x dired` = Open dired, the Emacs file manager
* `C-x C-q`	 = Enable the edit mode in dired, whereas editing file names can be made permanent with `C-x C-s` like it was a normal text buffer

when in dired mode these keys are available:

* `Enter` = Open file or directory
* `q`	= Close directory
* `C`, `R`, `D` = Respectively, copy, rename and delete a file
* `+` = Make a new directory
* `m` = Mark a file
* `u` = Remove a mark on a file
* `U` = Remove all marks
* `% m` = Mark according to a regexp
* `^` = Go to the parent directory

## Shell

* `M-x shell` = Open a shell
* `M-x term` = Open a terminal
* `M-x ansi-term` = Open a ANSI terminal
* `M-x eshell` = Open the internal Emacs shell, in ELisp

## Various

* `M-x compile` = Compile (with make)
* `M-x gdb` = Launch gdb
* `M-x grep` = Launch grep
* `M-x man` = Open a man page
* `M-x calculator` = Launch a small calculator
* `M-x calendar` = Open a calendar
* `M-x tetris` = Play tetris (really!)
* `M-x list-packages` = List available packages. Choose the one you want to install with `I` and execute the installation with `x`

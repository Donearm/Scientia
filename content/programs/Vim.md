---
title: ViM
bookCollapseSection: true
weight: 633
---
<!-- vim-markdown-toc GFM -->

* [Basic commands](#basic-commands)
* [Movements](#movements)
* [Removal and Substitution](#removal-and-substitution)
* [Text formatting](#text-formatting)
* [Windows](#windows)
* [Folding](#folding)
* [Searches](#searches)
* [Spell Checking](#spell-checking)
* [Buffers](#buffers)
* [Registers](#registers)
* [Ctags](#ctags)
* [Various Commands](#various-commands)
* [Macros](#macros)
* [Tips](#tips)
	* [Change statusline colours](#change-statusline-colours)
	* [Regexp](#regexp)
	* [Identify corresponding opening/closing HTML tag](#identify-corresponding-openingclosing-html-tag)
	* [Plugins](#plugins)

<!-- vim-markdown-toc -->

-------------

## Basic commands

* `J` = Join next to current line
* `:%j` = Join all lines (make the file all on a single line in practice)
* `u` = Undo
* `Ctrl+r` = Repeat last command (Redo)
* `.` = Repeat last command (escluding Undo, Redo and command of the `:command` type)
* `:w filename` = Save current file, or the selection, to `filename`
* `i` = Enter insert mode at the cursor position
* `a` = Enter insert mode after the cursor position
* `o` = Add an empty line below the current one
* `O` = Add an empty line above the current one
* `:q!` = Quit Vi without saving changes
* `V` = Start visual mode, selecting by lines
* `Ctrl+V` = Start visual mode, selecting by rows
* `p` = Paste
* `y` = Copy
* `“*P` = Paste clipboard's contents
* `“*y` = Copy selection to clipboard
* `”+y` = Copy selection to x11-selection (different from clipboard!)
* `”+p` = Paste x11-selection contents
* `"%p` = Paste the current file name
* `:put *` = Paste clipboard's contents
* `”<buffer>y` = Paste selection to <buffer\> (usually a single character for brevity reasons)
* `m<a>` = Mark current position as <a\>
* `:1,4up <newfile>` = Save file contents from line 1 through 4 into <newfile\>. Can be applied also to selections

## Movements

* `b` = Move back a word, going to the end of the previous one or at the beginning of the current one
* `w` = Jump at the beginning of the next word
* `e` = Jump at the end of the next word
* `:n` = Go to `n` line
* `Ctrl+AltGr+]` = Follow a url like `|url|`
* `Ctrl+T` = Go back to where was before following a link
* `10w` = Go forward 10 words
* `10b` = Go back 10 words
* `-` = Go back to the beginning of the previous line
* `+` = Go to the beginning of the next line
* `0` = Go at the beginning of the current line
* `$` = Go at the end of the current line
* `End` = Move to the end of the current line. It accepts a number to jump multiple lines
* `fj` = Go to the next occurrence of `j`
* `Fj` = Go to the previous occurrence of `j`
* `12G` = Go to the specified line. In the example, go to the 12th line
* `G` = Go to the end of the current buffer
* `10%` = Move to the 10% of the current buffer
* `Ctrl+W` = Jump to the next Vi window
* `'.` = Go to the last modified line
* `\`.` = Go to the exact point where last edit happened
* `\`\`` = Go back to the point before the last search was made
* `gt` = Go to the next tab
* `gT` = Go to the previous tab
* `gi` = Go to the exact point where last edit happened, like `\`.`, but also enter insert mode
* `m` = Go to the mark `m`
* `H` = Go to the first line of the screen (which is not the first line of the file!)
* `M` = Go to the middle of the screen
* `L` = Go to the bottom of the screen
* `Ctrl+U` = Scroll a page up
* `Ctrl+D` = Scroll a page down
* `n` = Go to the next occurrence of a search term
* `N` = Go to the previous occurrence of a search term
* `g*` = Go to the next occurrence of the word under the cursor
* `g#` = Go to the previous occurrence of the word under the cursor
* `%`  = Go to the end of the current block (which can be a if/then/else block, a comment, a text between parentheses etc.)
* `[[` = Go back to the beginning of the current function
* `gd` = Go to the first occurrence of the variable under the cursor, following the scope (thus first local then global variables)
* `gD` = Go to the first occurrence of the variable under the cursor, starting from the beginning of the file (thus ignoring scope; generally it's then the definition of the variable)
* `(` = Go to the beginning of the previous phrase (often it's the first character after a period or a newline)
* `)` = Go to the beginning of the next phrase
* `{` = Go to the beginning of the previous or current paragraph or code block
* `}` = Go to the end of the next or current paragraph or code block

## Removal and Substitution

* `x` = Delete the character under the cursor
* `X` = Delete the character before the cursor
* `dd` = Delete the current line
* `d11w` = Delete multiple words, in the example, 11
* `daw` = Delete the word under the cursor. This works also if not at the beginning of word, differently from `dw`
* `d^` = Delete everything from the cursor to the beginning of the line
* `d$` = Delete everything from the cursor to the end of the line
* `dG` = Delete everything from the cursor to the end of the file
* `c11wAAA` = Substitutes with `AAA` multiple words, in the example, 11
* `C` = Delete next line and enter insert mode
* `11rAAA` = Substitutes multiple times, here 11, the text `AAA` with what's after the cursor
* `:%s/stringtosubstitute/stringtoinsert/g` = Substitutes `stringtosubstitute` with `stringtoinser` in the file, all occurrences (g). Without the `%`, substitutes only in the current line
* `g?` = ROT13 encrypt the current line, or the selected ones
* `Ctrl+a` = Add 1 to the number below the cursor
* `Ctrl+x` = Subtract 1 to the number below the cursor
* `xp` = Switch character under the cursor with the following one
* `ddp` = Switch the current line with the following one
* `Istring<ESC>` = Add string at the beginning of every line previously selected with `Ctrl+v`
* `Astring<ESC>` = Add string at the end of every line previously selected with `Ctrl+v`
* `Ctrl+W` = When in insert mode, delete the word before the cursor
* `Rstring` = Overwrites the text from the cursor with string
* `rcharacter` = Insert character right under the cursor
* `:sort u` = Remove all double lines and sort them alphabetically
* `:v/regexp/d` = Remove all lines that **do not** match regexp
* `:g/regexp/d` = Remove all lines that **do** match regexp
* `:g/regexp/m$` = Move all lines matching regexp at the end of the file ($)
* `{d}` = Go to the end of the current paragraph, or the previous if the cursor is on an empty line, and delete it
* `d/regexp` = Delete everything between the cursor and the first occurrence of regexp
* `cas` = Substitute a sentence (delete all its contents and go in insert mode)
* `cap` = As above but on a whole paragraph
* `dap` = Remove the current paragraph
* `ci"` = Remove everything between the previous `"` and the next `"` and go in insert mode. It's not necessary to actually have the cursor between 2 `"`, it'll automatically move to the next occurrence
* `di"` = As above but it only delete the text

## Text formatting

* `gUw` = Make a word all uppercase (starting from the cursor)
* `guw` = Like above but lowercase
* `guu` or `gUU` = Make lowercase or uppercase a whole line
* `g~~` = Switch every character in the whole line, from uppercase to lowercase and viceversa
* `~` = Switch the character under the cursor (uppercase/lowercase)
* `>>` = Increase indentation
* `<<` = Remove a level of indentation
* `Ctrl+t` = Increase indentation (in insert mode)
* `Ctrl+d` = Remove a level of indentation (in insert mode)
* `:set textwidth=number` = Set line margin to `number`
* `gq` = Justify the current line
* `gq}` = Justify the curren paragraph
* `gggqG` = Justify all the file
* `:center` = Center the selection
* `:right` = Right align the selection
* `:left` = Left align the selection
* `:set autoindent` = Respect indentation when starting to edit a new line
* `:set linebreak` = Set linebreak of a word if it doesn't fit in the line, preventing it to be split across two lines
* `:set fileformat=(unix|dos)` = Set newline format to unix or dos
* `:retab` = Transform tabs in whitespaces and viceversa in the whole file, respecting current settings (like `expandtab`, `shiftwidth` and `tabstop`)
* `:1,$j` = Join all lines from the first (1) to the last ($) in a single line
* `:1G!Gsort` = Go to the first line (1G) and then sort the whole file

## Windows

* `:split file` = Open file in a new split window. Also `:new` to simply open an empty file
* `:vsplit file` = As above but the split window will be vertical
* `:res -n` = Shrink window of `n` lines
* `:res +n` = Enlarge window of `n` lines
* `z10` = Shrink window of 10 lines
* `:qwall` = Quit, closing and saving all changes in all windows
* `:qall!` = As above but don't save changes
* `:windo` = Execute a command in all windows

## Folding

* `zf3j` = Fold 3 lines
* `zfa(` = Fold from the parentheses "(" to the matching closing parentheses. Any symbol can be used. Cursor needs to be on the opening symbol
* `:20,25 fold` = Fold from line 20 through line 25
* `zo` = Open the fold under cursor
* `zc` = Close, fold again, the last opened fold
* `zr` = Open all the first level folds (those that aren't inside another fold)
* `zR` = Open all the folds
* `zm` = Close all first level folds
* `zM` = Close all folds
* `zd` = Delete the fold under the cursor
* `:set nofoldenable` = Delete all folds in current file

## Searches

* `/string` = Search string. Use `n` to jump between results
* `:g/regexp/` = Show all lines matching regexp
* `:g/regexp/#` = As above but also show the line number next to the matching lines
* `q/` = Show last searches
* `*` = Search word under the cursor forward in the file
* `#` = Search word under the cursor backward in the file
* `:%s/pattern//gn` = Count the occurrences of `pattern` in current buffer, without modifying anything

## Spell Checking

* `:set spell` = Enable spell checking. `:set nospell` to disable it
* `:set spelllang=xx` = Set spell checking language to xx. Dictionary files have to be in /usr/share/vim/spell or ~/.vim/spell
* `]s` = Go to the next wrong word
* `[s` = Go to the previous wrong word
* `zg` = Add word under the cursor to the main dictionary
* `zG` = Add word under the cursor to a supplementary dictionary, separated from the main one
* `zw` = Add word under the cursor to the dictionary of wrong words
* `zW` = Add word under the cursor to a supplementary dictionary of wrong words, separated from the main one
* `z=` = Show possible correction for the word under cursor

## Buffers

* `:badd file` = Add file to the buffer list but don't open it
* `:buffers` = Show all buffers
* `:ls` = Show all buffers
* `:bdelete` = Delete a buffer. Needs its name or its number. This doesn't dump the information about it so it's quicker to reopen it if needed
* `:bwipeout` = As above but delete also its information
* `:1,3bdelete` = Delete buffers from 1 to the 3
* `:buffer` = Show a buffer.
* `:bfirst` = Go to the first buffer
* `:bn` = Go to the next buffer
* `:bp` = Go to the previous buffer
* `:blast` = Go to the last buffer
* `:ball` = Open all buffer in as many split windows as needed
* `:bmodified` = Go to the last modified buffer
* `:bufdo` = Execute a command in all opened buffers

## Registers

* `:registers` = Show the contents of all registers
* `"0` = The register containing the most recent yanked text but never deleted text
* `"1-9` = Registers 1 through 9 contain the most recent deleted text, from the most recent (1) to the oldest (9)
* `"%` = The register containing the name of current buffer's file. It's a read-only register
* `":` = The register containing the most recent executed command
* `""` = The "unnamed" register. Every operation gets written into it, no matter what it is or if it's specifically saved to another register
* `"_` = A "discard" register. Everything written into it is lost
* `"-` = The register that saves any delete operations that is smaller than 1 line length. If the operation is explicitly saved to another register, it won't be saved here too
* `"/" = The register containing the most recent search pattern
* `"=expression<Enter>p" = The `=` register evaluates the `expression` and `p` paste it at the current cursor position. For instance, `"=5*5<Enter>p` will paste output 25
* `:22put r` = Insert contents of register `r` at line 22. Without a number, defaults to the current line

## Ctags

* `Ctrl+]` = Jump to the first occurrence Vim finds of the class/method/function/variable/whatever the cursor is at
* `Ctrl+t` = Get back to where you were before jumping with `Ctrl+]`
* `:tnext` = Go to the next tag
* `:tprev` = Go to the previous tag
* `:ltag` = Load the tags in the location list window, that can be shown with `:lopen`
* `Ctrl+x Ctrl+]` = Insert the first tag that starts with the characters before the cursor among tags and insert it in front of the cursor (in insert mode)

## Various Commands

* `:h holy-grail` = Show a general list of commands
* `:set all` = Show the options
* `:set list` = Show non-printable characters
* `:set paste` = Enable paste mode, useful to paste text without formatting it, exactly as it is. Disable it with `:set nopaste`
* `:set patchmode=.ext` = Make a copy of the current file with an extension ext
* `:set key=` = Remove the password set to open the file, making it plain text
* `:set number` = Show line numbers
* `:ab abb string` = Create an abbreviation, substituting string each time abb is typed
* `:una abb` = Cancel the previously created abbreviation abb
* `:ascii` = Show the decimal, hexadecimal and octal numbers of the characters under the cursor in the ASCII table
* `:digraph` = Show all special symbols that can be inserted and how
* `:noh` = Clean the screen from all highlightings
* `:e directory` = Open directory in Vi
* `:r!cmd` = Insert in Vi the output of shell command cmd
* `:r file` = Insert the contents of file under the cursor. Also `:2r` to insert at line 2
* `gf` = Open the filename or whole path under the cursor. To show the path Vi look for files, use `:echo &path`. Should work also with http or ftp urls
* `q:` = Show last executed commands
* `:tabe file` = Open file in a new tab
* `:tabc` = Close current tab
* `:tabn` = Go to next tab
* `:tabc` = Go to previous tab
* `!!date` = Insert date and time
* `Ctrl+L` = Clear screen from all messages and warnings
* `Ctrl+k` = Activate the insertion of special symbol and characters (those shown by `:digraphs`)
* `g<Ctrl+g>` = Show some statistics about current file
* `gv` = Select again last visual selection
* `Ctrl+n` = Show a list of possible completions for the word under cursor (based on the opened file)
* `Ctrl+x` and `Ctrl+l` = Show a list of possible completions for the whole line (in insert mode)
* `Ctrl+x` and `Ctrl+f` = Show a list of possible completions for the whole line with an existing path (in insert mode)
* `Ctrl+y` = Insert the character directly above the cursor. Useful to quickly copy the above line with very few edits (in insert mode)
* `Ctrl+v character` = Insert a literal character (as <Esc\> or an ASCII code or an Unicode character like `u<unicode_number>`
* `Ctrl+o` = In insert mode, execute a command as if it was in normal mode and then return to insert
* `:echom message` = Print message to the command line. Unlike `:echo`, the message stays visible until another substitutes it
* `:mksession file` = Save all open buffers in file (defaults to Session.vim) in the current directory. With `vi -S file` then the session can be quickly restored
* `:scriptnames` = List all plugins and files loaded at start, in the order they were loaded
* `vi +q  --startuptime startup.txt file` = Save debug info in `startup.txt`. Useful to see load times, what plugins and files are loaded etc.
* `:args` = Modify the arguments list. By default it corresponds to the opened files but with, for example, `:args *.c` it becomes all .c files in the current directory
* `:argdo cmd` = Execute cmd for every file in the arguments list
* `:diffupdate` = Recalculate the diff (in vimdiff or `vi -d` mode)
* `:set noscrollbind` = Disable simultaneous scrolling of the diff buffers. Reenable it then with `:set scrollbind`
* `ga` = Show the decimal, octal and hexadecimal index of the character under the cursor
* `:au` = Show all the autocommands in effect
* `:silent cmd` = adding `silent` before any command suppresses messages it may produce. Useful to not have to press <Enter> at startup to confirm enabling a plugin or a command
* `:$!xxd` = enters hex edit mode, to edit an hexadecimal file. Return to normal mode with `:%!xxd -r` before saving and quitting ViM

## Macros

Some macros I find useful

* `:g/^\s*$/d` = Delete all empty lines
* `:%s/^/\=line('.'). ''` = Add at the beginning of every line its number
* `:%s/^/\=strpart(line(”.”).” ”, 0, 5)` = As above but add a space between the number and the following text
* `:runtime! syntax/2html.vim` = Output the current file as html
* `:%s#<\_.\{-1,}>##g` = Remove all html tags
* `:g/regexp/,/regexp/d` = Remove all lines where the first *or* the second regexp appears
* `:%s/^\(.*\)\n\1$/\1/` = Remove all duplicated lines in the current file


##Tips

### Change statusline colours

Edit in the colour theme file the `hi Statusline` line. `ctermfg` is the foreground colour, `ctermbg` is the background. Use `:he cterm-colors` to see which colours can be used. Up until 256 colours, if the terminal supports it, can be used, see [here](http://vim.wikia.com/wiki/Xterm256_color_names_for_console_Vim)

### Regexp

Instead of backslashing special characters, it's possible to add `\v` at the
very beginning of a regexp so that everything that's not a letter, a number or
an underscore is taken to have a special meaning unless explicitly escaped. For
example:

```vim
:%s/\v^%(abc){1,3}(.+)$/\1/
```

doesn't need backslashing before parentheses, plus sign and curly brackets.

Also, `\c` turns off case sensitivity. Its opposite is `\C`, forcing case
sensitivity on.

### Identify corresponding opening/closing HTML tag

Typing `v` + `a` + `t` will select everything inside the html tag where is the cursor. Subsequently `o` will jump between the opening and closing tag, `c` will change content and `y` will yank

### Plugins

Other than using a plugin helper, from ViM 8 onward it is possible to install a plugin directly in the `.vim/pack/` directory and load it without touching the configuration at all.

If the plugin is on Github, it can be automatically installed and set to autoload with this command:

```vim
git clone --depth 1 https://github.com/account/pluginname .vim/pack/dist/start/pluginname
```

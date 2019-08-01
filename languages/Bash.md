# Functions

namename prints the basename without extension  
ext prints extension of a file, including "."  

```bash
	function namename()
	{
	  local name=${1##*/}
	  local name0="${name%.*}"
	  echo "${name0:-$name}"
	}
	function ext()
	{
	  local name=${1##*/}
	  local name0="${name%.*}"
	  local ext=${name0:+${name#$name0}}
	  echo "${ext:-.}"
	}
```

# Commands

## CTRL Key Bound

* `Ctrl + _` =  undo
* `Ctrl + @` = set mark
* `Ctrl + a` = Jump to the start of the line
* `Ctrl + b` = Move back a char
* `Ctrl + c` = Terminate the command
* `Ctrl + d` = Delete character under the cursor
* `Ctrl + e` = Jump to the end of the line
* `Ctrl + f` = Move forward a char
* `Ctrl + k` = Delete from cursor to EOL
* `Ctrl + l` = Clear the screen
* `Ctrl + n` = select the next command in history
* `Ctrl + p` = select the previous command in history
* `Ctrl + r` = Search the history backwards
* `Ctrl + R` = Search the history backwards with multi occurrence
* `Ctrl + t` = drag character before cursor over the one under the cursor
* `Ctrl + u` = Delete backward from cursor
* `Ctrl + v` = Insert next character verbatim
* `Ctrl + w` = kill word before cursor
* `Ctrl + x` = kill backward to the beginning of line
* `Ctrl + xx` = Move between EOL and current cursor position
* `Ctrl + x @` = Show possible hostname completions
* `Ctrl + y` = paste the text at top of the kill#ring
* `Ctrl + z` = Suspend/ Stop the command

## ALT Key Bound

* `Alt + ''<''` = Move to the first line in the history
* `Alt + ''>''` = Move to the last line in the history
* `Alt + ?` = Show current completion list
* `Alt + *` = Insert all possible completions
* `Alt + /` = Attempt to complete filename
* `Alt + .` = Yank last argument to previous command
* `Alt + b` = Move backward
* `Alt + c` = Capitalize the word
* `Alt + d` = Delete word
* `Alt + f` = Move forward
* `Alt + l` = Make word lowercase
* `Alt + n` = Search the history forwards non=incremental
* `Alt + p` = Search the history backwards non=incremental
* `Alt + r` = Recall command
* `Alt + t` = Move words around
* `Alt + u` = Make word uppercase
* `Alt + backspace` = Delete backward from cursor

## Meta Key Bound

Meta usually corresponds to the `Esc` key

* `M + f` = move forward to the end of next word
* `M + b` = move backward to the start of current or previous word
* `M + c` = capitalize current word
* `M + d` = kill current word
* `M + l` = downcase current word
* `M + t` = drag the word before cursor over the one under the cursor
* `M + u` = uppercase current word
* `M + y` = rotate the kill=ring

## More Special Keybindings

Here "2T" means Press `TAB` twice

* `$ 2T` = All available commands(common)
* `$ (string)2T` = All available commands starting with (string)
* `$ /2T` = Entire directory structure including Hidden one
* `$ 2T` = Only Sub Dirs inside including Hidden one
* `$ *2T` = Only Sub Dirs inside without Hidden one
* `$ ~2T` = All Present Users on system from "/etc/passwd"
* `$ $2T` = All Sys variables
* `$ @2T` = Entries from "/etc/hosts"
* `$ =2T` = Output like ls or dir
* `Ctrl + v Ctrl + m` = Insert a newline control character

# Scripts

## Remove the extensions from multiple files

```bash
find -type f -name "name.ext" | while read i; do mv $i $i%.ext; done
```

## Rot13 Encryption

In a file:

```bash
cat "$@" | tr 'a-zA-Z' 'n-za-mN-Z-A-M'
exit 0
```

## Rename multiple files

```bash
for files in $(ls .); do
	  newname=`echo $files | sed 's/oldtext/newtext/g'`;
	  mv $files $newname;
done
```

# Syntax

  
#### Various Bash syntax rules  
  
* `${#variable}` = Variable string length
* ` variable=$(<file) ` = Save in variable the content of a file
* ` : > file ` = Delete the content of file (like `cat /dev/null`). If it didn't exist, creates a new, empty one
* ` ls -l {b*, aa*, cc*} ` = Multiple selection. Select all files matching the `b*`, `aa*` and `cc*` patterns in a single `ls` run
* mkdir -p ` {aaa,bbb/ccc,def,parent{subdir1,subdir2,subdir3},ppp} ` = Make whole tree of directories with the same multiple selection syntax as above
* ` cmd1 (<cmd2) (<cmd3) (<cmd4) ` = Send the stdout of the various commands to the preceding one, from right to left. For example: `sort (<ls /bin) (<ls /usr/bin) (<ls /opt)`, which will send the list of files in those 3 directories to sort
* `variable=${1:-123} ` = Gives `variable` the value of the first parameter (`$1`). If this is empty, assign to it `123`
* `${variable##*.`} = Corresponds to everything there is in the variable after the period. Generally used with filenames to obtain just the extension
* `${variable%%.*`} = Corresponds to everything there is in the variable before the period. Great to obtain filenames without the extension
* `$RANDOM` = Gives back a semi-random number between 0 and 32767
* `[[ string =~ pattern ]]` = Returns true if string matches pattern (according to ERE, Extended Regular Expressions). Only for bash >=3.0
* `<<-END` = Usually `<<END` sends the output as it is. With an added `-` it strips any tab (but still includes whitespaces)
* `declare` = Declares various variables: with `-a`, an array, `-A` an associative array, `-i` an integer, `-l` a string with only lowercase characters, `-r` a read-only variable, `-u` a string with only uppercase characters
* `shopt -s extglob` = Enables extended globs  
* `^aaa^bbb` = Substitutes `aaa` with `bbb` in the last executed command on the terminal. Useful to rerun the same command but with different arguments
* `echo ${PIPESTATUS[@]}` = Find out all the exit codes of the previously piped commands
* `rm * !("filename")` = Remove all files in current directory but for `filename`. Wildcards can be used to specify the matching like `*.ext` or `filenames?` or `[!abcde]`
  
#### Bash History  

How to use and navigate through Bash's history
  
* `!!` = Rerun the last executed command
* `!*` = Represent all the arguments of the last executed command
* `!$` = Corresponds to the very last argument of the last executed command
* `!!:2-3` = Corresponds to the list of arguments going from the second to the third of the last executed command. It can also be used like `!!:2-$` to represent every argument from the second to the last.
* `!n` = Run the command at line `n` in `bash_history`
* `!cmd:p` = Show the last time `cmd` was executed, with all its arguments and parameters
* `!cmd` = Rerun, with same arguments and parameters, last execution of `cmd`
* `!!:gs/oldarguments/newarguments` = Rerun last executed command substituting `oldarguments` with `newarguments`

#### Bash Redirection

Partly copied/modified from [bash-redirections-cheat-sheet](https://github.com/pkrumins/bash-redirections-cheat-sheet)

* `cmd > file` = redirect stdout to file. Also `cmd 1> file`
* `cmd 2> file` = redirect stderr to file
* `cmd >> file` = append stdout to file
* `cmd &> file` = redirect stdout and stderr to file. Also `cmd > file 2>&1`
* `cmd <<< "string"` = redirect a single line of text to the stdin of `cmd`
* `exec 2> file` = redirect stderr of all commands to a file forever
* `exec 3< file` = open a file for reading using a custom file descriptor
* `exec 3> file` = open a file for writing usint a custom file descriptor
* `exec 3<> file` = open a file for reading and writing using a custom file descriptor
* `exec 3>&-` = close a file descriptor
* `exec 4>&3` = make file descriptor 4 to be a copy of 3. With `exec 4>&3-` also close 3
* `echo "abc" >&3` = write to custom file descriptor 3
* `cat <&3` = read from custom file descriptor 3
* `(cmd1; cmd2) > file` = redirecto stdout from multiple commands to a file (using a sub-shell). Or with `{ cmd1; cmd2 } > file`, without using a sub-shell
* `exec 3<> /dev/tcp/host/port` = open a tcp connection to host:port. With `/dev/udp/host/port` opens a udp connection
* `cmd1 |& cmd2` = redirect stdout and stderr of `cmd1` to stdin of `cmd2`. This is for bash 4.0+ only, for older versions use `cmd1 2>&1 | cmd2`
* `exec {filew}> file` = open a file for writing using a named file descriptor called {filew}. Bash 4.1+ only
* `cmd 3>&1 1>&2 2>&3` = swap stdout and stderr of cmd
* `cmd > >(cmd1) 2> >(cmd2)` = send stdout of cmd to cmd1 and stderr of cmd to cmd2

### Terminal Line Wrapping

To prevent commands to overlap on the prompt, add a `\` before every `[` and `]` in your bash prompt (`$PS1`)

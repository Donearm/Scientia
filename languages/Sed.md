###Edit a string in multiple files at once

`for f in $files; do grep $oldstring $f | sed 's/$oldstring/$newstring/g' $f > ${f}.new ; done`

this actually outputs every edited files to a new file. To edit in place, use sed with `-i` and don't redirect the output

###Update copyright date at the change of year

`sed -i 's/2011\([, ] \)/2012\1/g'`

###Various syntax

* `s/pattern//2g` = Remove pattern from the second (2) to the last (g) occurrence of it, thus excluding the first
* `'s/pattern/&/w file' < inputfile` = Save pattern from inputfile in file. Here `w` stands for write and the `&` represents the pattern itself
* `'/^#/ s/pattern//g'` = Remove pattern in all occurrences (g) that are in lines starting with `#` (^#). It's possible to use `'5 s/...//'` to remove only at the fifth line or `5,70` to remove only between the fifth and seventh line. Also with `/pattern1/,/pattern2/` to operate only on the text between pattern1 and pattern2
* `/pattern/ a\insertion` = Add insertion after pattern
* `/pattern/ i\insertion` = Add insertion before pattern
* `/pattern/ c\newwholeline` = Substitute pattern with newwholeline
* `s/<[^>]*>//g` = Remove all html tags
* `'1i Title, Name' file` = add an header of "Title, Name" at the first line in file (`1`)
* `'1a string' file` = like above but add the string **after** the first line (`a` instead of `i`)
* `'$a string' file` = add string after the last line of file (`$` means the end of the file here)
* `'s/^/String: /' file` = prepend String: to the beginning of every line (`^`). Similarly, using `$` instead append String: at the end
* `'/string/p' file` = sed as grep
* `'/string/d' file` = print only lines not containing the string. As `grep -v`
* `'/pattern/q' file` = print file only up until sed encounters `pattern`. `q` here means to quit when the action succeeds
* `'s/^../XX/' file` = replace first (`^`) 2 characters (`..`) of every line in file with XX. The `^` can be omitted, sed starts by default at the beginning of line. With `$` the same can be done for the end of line
* `'s/.*/"&"/' file` = add a character (`"`) before and after a string. `&` denotes the pattern matched, `.*` being the whole line/string

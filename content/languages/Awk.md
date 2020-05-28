---
title: Awk
weight: 405
bookCollapseSection: true
---

###  Print longest line value of a file

```awk
expand some_file | awk '{if (x < length()) x = length() } END { print “Longest row is ” x }'
```

###  Print only non-empty lines

```awk
awk 'NF > 0' some_file
```

###  Count lines

```awk
awk 'END {print NR}' some_file
```

### Awk as Grep

```awk
awk '{print $2}' some_file
```

which is a quicker alternative to `cat some_file | awk '{print $2}'`

To negate a pattern (print only lines that don't match), use `awk '$1 !~ /regexp/' some_file`

### Strings substitution

```awk
awk '{sub("from", "to"); print}'
```

substitutes "from" to "to". With `{gsub("from", "to"); print}` it substitutes all occurrences and not just the first. Both can be used with regexps, like `/regexp/', 'new_string'`

### Comparison

```awk
awk '$2 > 1'
```

print only lines where $2 is bigger than 1

```awk
awk '$1 > 1 && < 10'
```

multiple comparisons (bigger than 1 and smaller than 10)

`==`

equality

`~`

matching (even a regexp)

### Print only unique lines (like uniq)

```awk
awk '!a[$0]++' file
```

### Regexp matching

```awk
awk '$0 ~ "[A-Za-z0-9]+" {print $1}'
```

print $1 only if $0 matches the regexp

### Variables in Awk

```awk
awk -v var="bang" '{sub(var,"boom");print}'
```

it also accepts shell variables with `-v var=$shell_variable`

Environment variables can also be accessed with `awk '{print, $0,ENVIRON["x"]}' some_file`

### Date in Awk

```awk
awk '{print strftime("%d-%m-%y %H-%M-%S", systime());}'
```

`strftime` converts the output of `systime` from the Unix epoch to a more human-readable format. Pattern is the same as `date` command. `systime` can be omitted (it defaults to current time). Only in GNU awk.

### Print only fields after the first 2

```awk
awk '{$1=$2=""; print $0}'
```

---
title: Common Lisp
weight: 420
bookCollapseSection: true
---

## Syntax and various functions

```lisp
(format t "hello") 
```
	
print to stdout (t) the string

```lisp
(list :a 1 :b 2 :c 3)
```
	
make an indexed list (plist)

```lisp
getf (list :a 1 :b 2) :a) 
```
	
returns the value of `:a`

```lisp
(defvar var value) 
```
	
define var with given value

```lisp
(parse-integer str)
```
	
converts the string str in an integer (if possible)

```lisp
(y-or-n-p string)
```
	
make a yes/no prompt with `string` and waits the user input (basically until he press y or n)

```lisp
(with-open-file (out filename))
```
	
open filename and loads its contents in the variable `out`

```lisp
(read in)
```
	
read, and eventually evaluates in lisp, the string `in`

```lisp
(setf var value)
```

set value to variable var

```lisp
(remove-if-not #'evenp '(1 2 3 4)
```
	
remove not matching values (like `grep`). In the above example, prints only the even numbers (`evenp`)

```lisp
(evenp (1 2))
```

returns true if all the arguments are even numbers

```lisp
(equal)
```

string comparation

```lisp
(remove-if)
```

the opposite of `remove-if-not`, prints only not matching values

```lisp
reverse '(1 2 3)
```
	
reverse the arguments. In the example, returns `(3 2 1)`

```lisp
(quote expr)
```
	
return expr without evaluating. Alternatively, it can suffice `'(expr)`

```lisp
&optional
```
	
marks the beginning of the optional arguments to a function

```lisp
&rest
```

like above but save all arguments in a single list

```lisp
&key
```
	
assigns a variable to the following arguments. For example `(defun foo (a b &key c))`

```lisp
(function)
```
	
returns the function object. Also with `#'function`

```lisp
(funcall)
```
	
executes a function object

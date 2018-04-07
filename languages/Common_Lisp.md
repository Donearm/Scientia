## Syntax and various functions

	(format t "hello") 
	
print to stdout (t) the string

	(list :a 1 :b 2 :c 3)
	
make an indexed list (plist)

	getf (list :a 1 :b 2) :a) 
	
returns the value of `:a`

	(defvar var value) 
	
define var with given value

	(parse-integer str)
	
converts the string str in an integer (if possible)

	(y-or-n-p string)
	
make a yes/no prompt with `string` and waits the user input (basically until he press y or n)

	(with-open-file (out filename))
	
open filename and loads its contents in the variable `out`

	(read in)
	
read, and eventually evaluates in lisp, the string `in`

	(setf var value)

set value to variable var

	(remove-if-not #'evenp '(1 2 3 4)
	
remove not matching values (like `grep`). In the above example, prints only the even numbers (`evenp`)

	(evenp (1 2))

returns true if all the arguments are even numbers

	(equal)

string comparation

	(remove-if)

the opposite of `remove-if-not`, prints only not matching values

	reverse '(1 2 3)
	
reverse the arguments. In the example, returns `(3 2 1)`

	(quote expr)
	
return expr without evaluating. Alternatively, it can suffice `'(expr)`

	&optional
	
marks the beginning of the optional arguments to a function

	&rest

like above but save all arguments in a single list

	&key
	
assigns a variable to the following arguments. For example `(defun foo (a b &key c))`

	(function)
	
returns the function object. Also with `#'function`

	(funcall)
	
executes a function object

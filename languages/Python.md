* `class.__mro__` = Contains all the ancestors of the class, up till `object`, the Python base class
* `_` = At Python prompt, it represents the last value. Mostly like `$?` in Bash
* `__file__` = Contains the name of the file loaded (a module if importing or the filename of the script)
* `locals()` = Returns a dictionary with the local namespace
* `globals()` = Returns a dictionary with the global module namespace. Inside a class or function returns the module where this is declared, not where it's being executed
* `enumerate()` = Returns a list's elements with numeric indexes. For example, `0, abc, 1, def` etc.
* `[::2]` = Slice of a list, iterating every 2 elements. Works also by selecting a range (`[1:10:2]`)
* `[::-1]` = Iterate over a list backward
* `print("The {foo} is a {bar}".format(foo='answer', bar='42'))` = String substitution in print using an alphanumerical index
* `first,*rest,last = (1,2,3,4,5,6,7)` = Assign first element of the tuple to `first`, the last to `last`, and all those in between to `rest`. Python 3 only
* `first,second,*rest = 1,2,3,4,5,6` = Similarly to above, assign 1 to first, 2 to second and from 3 onward to rest. Rest will result in a list (`[3,4,5,6]`). Python 3 only
* `__qualname__` = Attribute of classes and functions showing the "path" from the module top-level to their definition. Practically shows all the parents functions/classes of a function/class. Only in Python >=3.3
* `python -m pydoc -k keyword` = Search Python documentation for "keyword"
* `python -m this` = The Zen of Python ;)
* `a[-3]` = Negative indexing, returns the third to last element of a list
* `lastthree = slice(-3, None)` = Saving a slice in a variable

###Decorators

Write a function like this:

    def func1(func):
           def wrapper():
				# code to execute before func()
                func()
				# code to execute after func()
           return wrapper

and then pass to a function this way:

    @func1
    def func():
		# function code

###Metaclasses

Syntax:

    ClassName = type(
           'ClassName',
           (object, ),
           {'abc': def, 'esse': erre}
    )

where `ClassName` is the name of the metaclass, `(object,)` is a tuple with all the classes to inherit and the following dictionary is the namespace of the metaclass. To refer to an instance of a metaclasse, use `cls` instead of `self`

Then to instantiate a metaclass:

    MyClass = ClassName('MyClass', (object, ), {})

or it's possible to instantiate the metaclass directly when creating a class, like:

    class MyClass(object):
          __metaclass__ = MyMetaClass

###Set operations

various operations possible over sets. Examples:

	A = {1, 2, 3, 3,}
	B = {3, 4, 5, 6, 7}

* `A | B` -> `set([1, 2, 3, 4, 5, 6, 7])`
* `A & B` -> `set([3])`
* `A - B` -> `set([1, 2])`
* `B - A` -> `set([4, 5, 6, 7])`
* `A ^ B` -> `set([1, 2, 4, 5, 6, 7])`


##Modules

###Bisect

* `bisect.insort(l, e)` = Insert `e` in list `l`, automatically sorting the list. For huge lists it should be quicker than using `.sorted()`

###Calendar

* `class HTMLCalendar` = Format to html a calendar. After instantiating, use it like `i.formatmonth(2012,11)` to obtain the html code for november 2012
* `python -m calendar 2013` = Outputs the calendar for the 2013. It can be customized to print in html or text format, with or without a css and by width, lines, spacing etc. (see `python -m calendar -h`)

###Cgitb

* `cgitb.enable()` = Enable a very verbose traceback. With argument `format="html"` the output is html

###Collections

* `class Counter` = A class to count the occurrences of a character or integer inside a list, dictionary or string. Returns a dictionary like `{'a': 3, 'b': 2, 'c': 2}`
* `collections.deque` = A different kind of queue, where values can be pushed or popped from both sides and not only one like in normal queues
* `collections.OrderedDict` = A dictionary that remembers the order in which values have been inserted and when iterated upon, returns value in that exact order. Consequently, 2 OrderedDict with the same values but in a different order will not be considered equals, whereas a 2 normal dictionaries would

####Named tuples

	Point = collections.namedtuple('Point', ['x', 'y'])
	p = Point(x=1.0, y=2.0)

###Dis

* `dis.dis(code_object)` = Disassemble un code\_object

###Itertools

Permutations

	for p in itertools.permutations([1, 2, 3, 4]):
		print(''.join(str(x) for x in p))

prints all the possible combinations
	
	1234
	1243
	1324
	1342

etc.

###Json

* `python -m json.tool < file.json` = Pretty JSON printer

###Os.Path

* `os.path.sep` = Variable containing the path separator of the current OS ('\' or '/')
* `os.path.extsep` = Variable containing the filename/extension separator (usually, '.')
* `os.path.curdir` = Variable containing the symbol of the current directory ('.' in Unix-like sytems)
* `os.path.pardir` = Variable containing the representation of the parent directory ('..' in Unix-like systems)

###Platform

Module to obtain various informations on the system. For example:

* `platform.system()` = The OS name (like "Linux" or "Windows")
* `platform.node()` = The hostname
* `platform.release()` = The release number of the OS (on Linux is usually the kernel version)
* `platform.machine()` = The kind of hardware of the machine (like 'i386')
* `platform.architecture()` = The architecture of the machine (nearly always nowadays, 32 or 64bit). Giving a file as argument, returns the architecture of it instead of the machine

###Socket

* `socket.gethostname()` = Returns the hostname
* `socket.gethostbyname(host)` = Returns the IP of host
* `socket.gethostbyname_ex(host)` = Returns all the IPs and aliases that belong to host

###String

* `string.capwords(s)` = Capitalize string `s`

###Sys

* `sys.getrefcount(object)` = Returns the number of times object is used. Includes a spurious copy created by `getrefcount` itself. Object can be a variable, a class or a function
* `sys.getsizeof(object)` = Returns how much memory is occupying object. For classes, doesn't include also all the attributes
* `sys.modules` = Contains the currently loaded modules (recursively)

###Time

* `time.clock()` = Returns the cpu time, the number of clocks from the execution of the current program. Useful to measure performances because `clock()` doesn't increases during idle time but only when actually running

###Timeit

* `python -m timeit '".".join(str(n) for n in range(100))'` = Quick measuring of speed of code snippets

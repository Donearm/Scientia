### Self in Lua

Declaring a function as `t:test` instead than `t.test` will automatically set a variable named `self` that refers to `t`. If that is a table, it'll be possible to use `self.a` to refer to the value of object `a` in table `t` (like `table = {a=1}`)

---
title: Lua
weight: 430
bookCollapseSection: true
---

### Self in Lua

Declaring a function as `t:test` instead than `t.test` will automatically set a variable named `self` that refers to `t`. If that is a table, it'll be possible to use `self.a` to refer to the value of object `a` in table `t` (like `table = {a=1}`)

### Coroutines

* `coroutine.create(f)` = where `f` is a function
* `coroutine.resume(c, [ares])` = resume a coroutine, optionally passing an argument
* `coroutine.running()` = to obtain a reference to the currently running coroutine
* `coroutine.status(c)` = returns strings "running", "suspended", "normal", "dead" according to the status of the coroutine
* `coroutine.yield(...)` = suspends the current coroutine and returns its arguments
* `coroutine.wrap(f)` = wrap a normal function so it can be used like `coroutine.yield()` on it, like it were a coroutine

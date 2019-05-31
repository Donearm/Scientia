### Commands

* `go list all` = List all installed packages, standard library's included
* `go list std` = List only packages from the standard library
* `go test -bench=.` = Run benchmarks after the tests. `.` stands for current directory, obviously
* `go env` = List all Go variables

### Go Modules

* `go mod init` = creates a new module by initializing the `go.mod` file
* `go list -m all` = prints the current module's dependencies
* `go mod tidy` = removes unused dependencies

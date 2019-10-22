### Commands

* `go list all` = List all installed packages, standard library's included
* `go list std` = List only packages from the standard library
* `go test -bench=.` = Run benchmarks after the tests. `.` stands for current directory, obviously
* `go env` = List all Go variables

### Go Modules

* `go mod init` = creates a new module by initializing the `go.mod` file
* `go list -m all` = prints the current module's dependencies
* `go mod tidy` = removes unused dependencies

### Test Coverage

* `go test -cover` = prints the percentage of coverage of your unit tests
* `go test -cover -coverprofile=c.out` = save the coverage results in the `c.out` file. With it it's possible to have a html view of the tests' coverage with `go tool cover -html=c.out -o coverage.html`

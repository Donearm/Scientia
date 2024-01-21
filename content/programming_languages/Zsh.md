---
title: Zsh
weight: 498
bookCollapseSection: true
---

# For loops syntax

In Zsh, the for loops syntax differs from Bash. Write a loop either like:

```zsh
for x (1 2 3); do echo $x; done
```

or like this:

```zsh
for x in 1 2 3; do echo $x; done
```

# Parameter expansion

An alternative to the POSIX-complaint `${i%.ext}.newext` in Zsh is:

```zsh
${i:r}.newext
```

The `:r` tells the shell to automatically strip the extension, period included

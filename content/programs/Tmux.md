---
title: Tmux
bookCollapseSection: true
weight: 630
---

### Change base directory of an existing session

First detach from the session. Then reattach with:

	tmux attach -t $sessionname -c /new/base/dir

### Various commands

* `:set -g status off` = hide the statusbar. Can be re-enabled with `on`, surprisingly
* `<prefix>(` and `<prefix>)` = jump between active sessions
* `prefix>:kill-session` = kill the current session (from within itself)
* `tmux list-keys` = list all keybindings. Can be run from within a session with `<prefix:list-keys` or `<prefix>?`

### Change base directory of an existing session

First detach from the session. Then reattach with:

	tmux attach -t $sessionname -c /new/base/dir

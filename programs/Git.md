A brief Git cheatsheet. Only the commands I found more useful (or that I repeatedly forget the syntax :) )

* `git mv oldfile newfile` = Move a file, or simply rename it
* `git reset --hard SHA1_HASH` = Revert to the commit with `SHA1_HASH` and delete all subsequent commits
* `git revert SHA1_HASH` = Like above but write a new commit that restore the repository as it was on `SHA1_HASH` commit. All the subsequent commits, that with `--hard` would have been lost, are still in the log and can be quickly reverted back to
* `git log > Changelog` = Save the log as a simple changelog
* `git log file` = Show all commits that modified `file`. Usually `file` is a full path but it is also possible to use wildcards, like `**/*.js`
* `git log -Sstring -p` = Show all commits that match `string` and show also their changes (`-p`)
* `git log -p --grep "perl_regexp"` = Show all commits whose message matches `perl_regexp`
* `git merge somebranch` = Merge `somebranch` with current branch
* `git checkout -b somebranch` = Create a new branch `somebranch` and copy the content of master in it
* `git checkout .` = Cancel all changes not yet committed (but keep new files). Basically return the repository state to the last commit
* `git cherry-pick SHA1_HASH` = Apply the changes in the commit corresponding to `SHA1_HASH`. Commit can be on another branch (and usually it is). For multiple commits, it's simpler to merge and then rebase
* `git cherry-pick -X theirs SHA1_HASH` = Apply the changes in the commit corresponding to `SHA1_HASH`. In case of conflicts, prefer the commit's version to the current branch one. The reverse can be preferred with `-X ours` instead
* `git stash` = Save changes in the stash and return the repository to a clean state. Later they can be recovered and applied with `git stash apply` and shown with `git stash show`. To have a list of all changes in the stash use `git stash list`
* `git stash -p` = Interactively select which changes and files to stash
* `git commit --amend` = Modify the last commit message
* `git commit --amend -a` = Modify the last commit message and add also all new changes yet to be committed in it
* `git rebase -i HEAD~3` = Permit to modify, delete or merge all the last 3 commits from the HEAD
* `git blame file` = Show all the editing done in file and who did it
* `git bundle create somefile HEAD` = Save the whole repository in `somefile`. To then import it back, use `git pull somefile`
* `git bundle create somefile HEAD ^COMMON_SHA1` = As above but only from `COMMON_SHA1` onward. This is useful when there's an older version of repository, offline, that needs to be just updated with the latest commits
* `git format-patch START_COMMIT` = Create a patch that includes all changes from `START_COMMIT` till the HEAD. An email header is also generated, for quicker sending
* `git format-patch START_COMMIT..END_COMMIT` = As above but consider only the commits between `START_COMMIT` and `END_COMMIT`
* `git diff START_COMMIT..END_COMMIT` = Create a patch of commits between `START_COMMIT` and `END_COMMIT`. Unlike `format-patch`, it's a plain patch ready to be used with `patch`
* `git diff --unified=10` = Show 10 lines before and after a change instead of the default 3
* `git am < patch`  = Apply patch to the repository
* `git archive --format=tar --prefix=project-1.2.3/ -o outputfile HEAD` = Save a tarball (or a zip if format is `zip`) of the whole repository in `outputfile`, with the given prefix, in the current directory, as is in HEAD
* `git add -p` = Allow to select which changes to include in the next commit
* `git clean -x` = Remove untracked and explicitly ignored files. With also `n` does a dry run, without actually removing anything
* `git reflog` = Show an extended log, including various operations like merges and checkouts, along with commits
* `git filter-branch --index-filter 'git update-index --remove file' master` = Completely remove `file` from the history, from the branch master, in every commit it appears. It's like it never existed. To repeat for every branch in which the file was present
* `git pull --rebase` = Pull from a remote branch but don't generate a commit message for the merge
* `git show :/regexp` = Show last commit message matching `regexp`
* `git show <commitid>:filename` = show the status of `filename` at `commitid`
* `git remote rename aaa bbb` = Rename remote branch `aaa` to `bbb`
* `git pull origin branch_remote:branch_local` = Pull a remote branch in the local one, creating the latter if it didn't already exist
* `git merge --edit` = Edit the commit message when doing a merge
* `git merge --squash branch` = Merge from branch in the current one, squashing all commits messages from when it diverged. After this, use `git commit` to record a single commit of changes
* `git diff --word-diff` = Highlights word changes, inline, instead of whole lines
* `git status -sb` = A more concise output for status
* `git checkout -t origin/feature` = Creates and checks out the local "feature" branch that tracks the remote "origin/feature"
* `git name-rev --name-only COMMIT_SHA1` = Prints where the `COMMIT_SHA1` is in the history, relative to a tag. It can output things like `master~2` (commit is 2 commits before latest in master branch) or `tags/v2.3~6` (commit is 6 tags before the one with tag 2.3)
* `git branch -a --contains COMMIT_SHA1` = Shows all branches, and also remotes with `-a`, that have the given commit in their histories
* `git show :/fix` = Shows the last commit that contains the word "fix". Also supports regexp, like `:/^Test`
* `git log --diff-filter=D --summary` = Show files, with the corresponding commits, that have been deleted
* `git show commit:file` = Show the full file as it was at commit
* `git log -p --author=name` = Show all commits whose author matches `name` (it may be a partial name or a regexp)
* `git log -p master ^origin/master` = Show a diff of what is new in `master` compared to `origin/master`. It is also possible to use multiple arguments, like `git log -p master ^origin/master ^upstream/master`
* `git update-index --assume-unchanged file` = Assume `file` is unchanged even if it's not, excluding it from being committed. Re-enable the modifications then with `git update-index --no-assume-unchanged file`
* `git ls-files` = List all files tracked in the repo
* `git push origin --delete branchname` = Delete the remote `branchname`
* `git cherry -v --abbrev testing master` = Show a list of commits present in master but not in testing
* `git clone --depth 1` = Clone only 1 revision in a repo's history. To save space, mostly, or to send a quick patch or if you are only interested in the latest state of the project. A repository thus created can't be cloned, fetched or pushed from or into it.
* `git show branch-name:filename.js` = Show `filename.js` as it currently is in `branch-name`
* `git cherry-pick SHA1_HASH..SHA1_HASH` = Apply changes in after the first hash till, including, the second one. To also include changes from first hash use `SHA1_HASH^..SHA1_HASH` format
* `git remote set-url branch-name url` = Set url of remote `branch-name` to `url`. Adding `--push` also changes the remote url to push to for specified branch
* `git config --list --show-origin` = list all configuration settings for Git, both global and local, and where each is set


### Cherry picking a range of commits

1. Create a new branch from the branch where are the commits you want to apply by specifying the last wanted commit: `git checkout -b newbranch SHA1_HASH_OF_COMMIT`
2. Then rebase from the older wanted commit into master: `git rebase --onto master SHA1_HASH^`

### Github

Sync with origin (the remote repository) after a local fork:

1. Create a local branch to be linked with the master of origin: `git checkout -b origin/master`
2. Add the origin repository as a remote: `git remote add origin git://github.com/username/repo.git`
3. Pull: `git pull origin remote`
4. Checkout into local master: `git checkout master`
5. Merge origin master in local master: `git merge origin/master`

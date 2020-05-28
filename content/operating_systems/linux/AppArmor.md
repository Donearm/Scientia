---
title: AppArmor
bookCollapseSection: true
weight: 511
---


## Basic commands

* `apparmor_status` = show the AppArmor status
* `aa-unconfined` = show processes running as "unconfined"
* `aa-complain $profile_path` = change `$profile_path` to run in complain mode. Same syntax can be used for `aa-enforce` and `aa-disable` to respectively set a profile to enforce or disable mode
* `aa-genprof $command` = generate a profile for `$command`

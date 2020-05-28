---
title: SELinux
bookCollapseSection: true
weight: 545
---


## General commands

* `semanage login -l` = view the mappings of SELinux users to Linux users
* `semanage $user -l` = view a specific SELinux user details
* `sestatus` = show current status of SELinux
* `getenforce` = get the current mode of SELinux
* `setenforce 'enforcing'` = set the mode of SELinux as "enforcing"
* `getsebool -a` = show all the boolean settings that can be modified. A longer visualization can be had with `semanage boolean -l`
* `setsebool -P httpd_enable_homedirs=1` = enable the `httpd_enable_homedirs` boolean. 1 is "on", whereas 0 would be "off"
* `ps axZ` = get all running processes with added showing the SELinux contexts they're running under
* `chcon $context $file` = change the context of a file to `$context`
* `restorecon $file` = restore the SELinux context for `$file` according to default policies

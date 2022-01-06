---
title: Sysrq Key
bookCollapseSection: true
weight: 550
---

### How do I use the magic SysRq key?

to enable it 

```bash
echo "1" > /proc/sys/kernel/sysrq
```

or edit `/etc/sysctl.conf` and add `kernel.sysrq = 1`

On x86 - You press the key combo "ALT-SysRq-<command key\>".
 Note - Some keyboards may not have a key labeled *SysRq*. The *SysRq* key is also known as the _Print Screen_ key. Also some keyboards cannot handle so many keys being pressed at the same time, so you might have better luck with "press Alt", "press SysRq", "release Alt", "press <command key\>", release everything.

#### What are the 'command' keys?

* `r`		= Turns off keyboard raw mode and sets it to XLATE.
* `k`		= Secure Access Key (SAK) Kills all programs on the current virtual console. NOTE: See important comments below in SAK section.
* `b`		= Will immediately reboot the system without syncing or unmounting your disks.
* `c`		= Will perform a kexec reboot in order to take a crashdump.
* `o`		= Will shut your system off (if configured and supported).
* `s`		= Will attempt to sync all mounted filesystems.
* `u`		= Will attempt to remount all mounted filesystems read-only.
* `p`		= Will dump the current registers and flags to your console.
* `t`		= Will dump a list of current tasks and their information to your console.
* `m`		= Will dump current memory info to your console.
* `v`		= Dumps Voyager SMP processor info to your console.
* `0-9`	= Sets the console log level, controlling which kernel messages will be printed to your console. ('0', for example would make it so that only emergency messages like PANICs or OOPSes would make it to your console.)
* `f`		= Will call oom\_kill to kill a memory hog process
* `e`		= Send a SIGTERM to all processes, except for init.
* `i`		= Send a SIGKILL to all processes, except for init.
* `l`		= Send a SIGKILL to all processes, INCLUDING init. (Your system will be non-functional after this.)

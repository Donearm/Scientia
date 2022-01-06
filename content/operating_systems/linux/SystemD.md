---
title: SystemD
bookCollapseSection: true
weight: 555
---

* [Systemd/Systemctl](#systemd-systemctl)
* [Journal](#journal)
* [Various](#various)

--------------

### Systemd/Systemctl

+ `systemd-cgls` = show full hierarchy of control groups
+ `systemd-cgtop` = the same of `systemd-cgls` but ordered by CPU, memory and disk I/O load
+ `systemctl kill apache` = kill all processes associated with apache server
+ `systemctl daemon-reload` = reload a service configuration
+ `systemctl list-unit-files` = show a full list of installed unit along with their state
+ `systemctl list-timers --all` = show a full list of timers, enabled or not
+ `systemctl --failed` = show failed units
+ `systemctl isolate runlevel3.target` = switch to run level 3. Run level 5 is named `graphical.target`
+ `systemctl show --property=UnitPath` = show all paths SystemD checks for unit files
+ `systemctl list-unit-files -t target` = list all unit files for the available target
* `systemctl get-default` = show the current default system target
* `systemctl set-default target` = set the default system target
* `systemctl rescue` = start single-user rescue mode
* `systemctl reload service` = reload the configuration files of `service`, without restarting the service itself
* `systemctl mask service` = link the service unit file to /dev/null, practically disabling it, even if specifically started with `systemctl start`. It can be re-enabled with `systemctl unmask service` later

### Journal

+ `journalctl -o verbose` = Enable verbose output for systemd's journal
+ `journalctl -e` = Jumps directly at the end of the log (in conjuction with less)

### Various

+ `hostnamectl` = get server hostname
+ `hostnamectl set-hostname abc` = set hostname to `abc`
+ `localectl` = get current locale, both on virtual console and X11
+ `timedatctl` = get info about time and timezone

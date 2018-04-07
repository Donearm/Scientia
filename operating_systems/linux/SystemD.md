###Systemd/Systemctl

+ `systemd-cgls` = show full hierarchy of control groups
+ `systemd-cgtop` = the same of `systemd-cgls` but ordered by CPU, memory and disk I/O load
+ `systemctl kill apache` = kill all processes associated with apache server
+ `systemctl daemon-reload` = reload a service configuration
+ `systemctl list-unit-files` = show a full list of installed unit along with their state
+ `systemctl --failed` = show failed units
+ `systemctl isolate runlevel3.target` = switch to run level 3. Run level 5 is named `graphical.target`

###Journal

+ `journalctl -o verbose` = Enable verbose output for systemd's journal
+ `journalctl -e` = Jumps directly at the end of the log (in conjuction with less)

###Various

+ `hostnamectl` = get server hostname
+ `hostnamectl set-hostname abc` = set hostname to `abc`
+ `localectl` = get current locale, both on virtual console and X11
+ `timedatctl` = get info about time and timezone

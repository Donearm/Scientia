### Various Commands

* `cvsup` = Update ports tree
* `make search key=program` = Search for `program` among the ports tree
* `make index` = Generate the ports index
* `pkg_add` = Install a package
* `pkg_info` = Show info about installed packages
* `pkg_version` = Show version number of an installed package
* `pkg_delete` = Remove a package
* `/etc/rc.d/rc.daemon rcvar` = Check if `daemon` is enabled or not
* `/etc/rc.d/rc.daemon status` = Check the status of `daemon`
* `kldload` = Load a kernel module
* `pw` = Modify, remove or add users and groups
* `ipfw -a list` = List firewall rules
* `burncd` = Command to burn cd
* `gbde` = Utility to encrypt/decrypt a disk
* `portupgrade -af` = Upgrade all ports
* `freebsd-update` = Upgrade the whole system
* `freebsd-update -r version upgrade` = Upgrade system to `version`
* `freebsd-update install` = Actually install updates, remove old libraries and object files
* `portsclean -C` = Clean out the `work` directory of past compilations
* `portsclean -D` = Clean out all distfiles that are not referenced by any ports in the tree. With `-DD`, cleans out all distfiles that are not referenced by any currently installed port
* `make mantainer` = Print the email of the port's mantainer (to be launched from the port's directory)
* `portsnap fetch` = Download the ports database (in `/var/db/portsnap`)
* `portsnap extract` = Extract the ports database in `/usr/ports`
* `ipfstat` = General statistics of the firewall (ipfilter)

### Useful Files

* `/usr/src/sys/arch/conf/lint` = Contains kernel configuration options
* `/etc/defaults/make.conf` = Options for make
* `/var/db/pkg` = Database of the installed packages
* `/boot/device.hints` = Contains the variables read by kernel at boot time
* `/dev/sndstat` = Info about the soundcard

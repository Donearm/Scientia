### Commands

+ `update-rc.d script defaults` = Add the script to all runlevels. It must be present in `/etc/init.d/`
+ `dpkg -P package` = Removes all files left by package, after having removed it with `apt-get remove`. Also with `apt-get purge`
+ `apt-mark hold package` = Prevent automatic updating of `package`

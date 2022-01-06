---
title: Archlinux
bookCollapseSection: true
weight: 512
---

# Set up a wireless connection

Using [iwd](https://wiki.archlinux.org/title/Iwd) as a network manager, it is possible to use the cli `iwctl` to interactively connect and set up the connection's parameters or write them directly in the directory `iwd` looks for them, `/var/lib/iwd/`. Under this directory, create a file named after your SSID like `name-of-ssid.psk` with this content:

```conf
[Security]
Passphrase=yourpassphrase
```

At the first connection, `iwd` will append a pre-shared key entry to this file. More info at [iwd#WPA-PSK](https://wiki.archlinux.org/title/Iwd#WPA-PSK).

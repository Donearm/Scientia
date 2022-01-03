---
title: Raspberry Pi OS
bookCollapseSection: true
weight: 542
---

## Useful links

* [Guide on how to move the Raspberry Pi OS installation from the SD card to an USB hdd](https://www.pragmaticlinux.com/2020/08/move-the-raspberry-pi-root-file-system-to-a-usb-drive/)
* [Nightlies repository for the 64bit version](https://downloads.raspberrypi.org/nightlies/)

## Configure Wireless and Wired connections

Create a `wpa_supplicant.conf` file in /boot, which will be later copied on the root partition at `/etc/wpa_supplicant/wpa_supplicant.conf`, with these contents:

```cfg
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=<Insert 2 letter ISO 3166-1 country code here>

network={
	ssid="<Name of your wireless LAN>"
	psk="<Password for your wireless LAN>"
}
```

More info [here](î200~https://www.raspberrypi.org/documentation/configuration/wireless/headless.md).

For a wired connection, it should connect automatically. Just make sure that the router the RaspberryPi is attached to is accepting connections from new devices and not rejecting them by default.

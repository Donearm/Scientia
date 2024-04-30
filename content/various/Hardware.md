---
title: Hardware
bookCollapseSection: true
weight: 820
---

## Ethernet Cable Categories

#### Cat5

Up to 100Mb/s and 100 meters. Cat5e ("enhanced") can reach up to 1000Mb/s. RJ45 connector is used.

#### Cat6

Up to 1000Mb/s (1 Gigabit) and 100 meters. Cat6a ("augmented") can reach up to 10000MB/s (10 Gigabit) and is shielded. RJ45 is used.

#### Cat7

Up to 10000Mb/s (10 Gigabit) and 100 meters. It uses an 8P8C cable and not the classic RJ45. Mostly superseded by the more compatible Cat6a.

#### Cat8

Up to 250000 or 40000Mb/s (25 and 40 Gigabit) and 30 meters. Currently in development.

## Keyboard layouts

[A visual comparison of different national layouts on a computer keyboard](http://www.farah.cl/Keyboardery/A-Visual-Comparison-of-Different-National-Layouts/)

## Remapping keyboards with Via/QMK

Under Linux a few things need to be set up correctly. Firstly, at the time of this info (early 2024) only Chromium-based browsers can use [Usevia](https://usevia.app/), the website on which keyboards supporting the protocol can be remapped.

Second, an udev rule is necessary. Edit the file `/etc/udev/rules.d/98-via.rules` adding:

```
KERNEL=="hidraw*", SUBSYSTEM=="hidraw", MODE="0666", TAG+="uaccess", TAG+="udev-acl"
```

Then reload the rules with:

```
udevadm control --reload
```

Then use a browser to access the [Usevia](https://usevia.app) site and remap freely. The keyboard must be connected via usb, not bluetooth. If the browser cannot access the keyboard, with a `Failed to open the device.` error message or similar, check the device logs of Chrome/Chromium by going to `chrome://device-log` and see what path has the keyboard on Linux. It will be one of the various `/dev/hidraw` followed by a number. It is a matter of fixing the permissions with:

```
sudo chmod a+rw /dev/hidraw3
```

And retry to map the keys again. Once done, to ensure that the device is not accessible by anyone, revert the permissions with:

```
sudo chmod 600 /dev/hidraw3
```

And you are done!

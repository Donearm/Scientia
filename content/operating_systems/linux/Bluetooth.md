---
title: Bluetooth
bookCollapseSection: true
weight: 514
---

## Dual boot pairing

There are a few things to consider when using a bluetooth device under Linux along with it being used under Windows as well. The Archlinux Wiki has a good [section on dual boot pairing](https://wiki.archlinux.org/title/Bluetooth#Dual_boot_pairing) but I experienced issues in following it, and a few steps seemed unnecessary in my case. YMMV, of course.

I followed instead [this answer](https://unix.stackexchange.com/questions/255509/bluetooth-pairing-on-dual-boot-of-windows-linux-mint-ubuntu-stop-having-to-p/255510#255510) on Stackexchange, which I will copy here the steps that helped me.

### The issue

Basically, when you pair your device, your Bluetooth service generates a unique set of pairing keys. First, your computer stores the Bluetooth device's MAC address and pairing key. Second, your Bluetooth device stores your computer's MAC address and the matching key. This usually works fine, but the MAC address for your Bluetooth port will be the same on both Linux and Windows (it is set on the hardware level). Thus, when you re-pair the device in Windows or Linux and it generates a new key, that key overwrites the previously stored key on the Bluetooth device. Windows overwrites the Linux key and vice versa.

### The solution

1. Pair all devices with Linux
2. Pair all devices with Windows
3. Copy your Windows pairing keys:
    a. Use `psexec -s -i regedit.exe` from Windows (harder). You need psexec as normal regedit doesn't have enough permissions to show this values.
    b. Go to "Device & Printers" in Control Panel and go to your Bluetooth device's properties. Then, in the Bluetooth section, you can find the unique identifier. Copy that (you will need it later). Note: on newer versions of windows the route to the device's properties is to go through Settings -> Bluetooth & devices -> Devices -> More devices and printer settings
    c. Download PsExec from http://technet.microsoft.com/en-us/sysinternals/bb897553.aspx.
    d. Unzip the zip you downloaded and open a cmd window with elevated privileges. (Click the Start menu, search for cmd, then right-click the CMD and click "Run as Administrator".)
    e. cd into the folder where you unzipped your download.
    f. Run `psexec -s -i regedit.exe`
    g. Navigate to find the keys at `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\BTHPORT\Parameters\Keys`.  If there is no CurrentControlSet, try ControlSet001.
    h. You should see a few keys labels with the MAC addresses - write down the MAC address associated with the unique identifier you copied before. Note: If there are no keys visible after pairing, you likely need to add permissions to read (right click -> permissions) Keys\
    i. Make a note of which Bluetooth device MAC address matches which pairing key. The Mint/Ubuntu one won't need the spaces in-between.  Ignore the :00000.
4. Go back to Linux and add our Windows key to our Linux config entries. Just note that the Bluetooth port's MAC address is formatted differently when moving from Windows to Linux - referenced as aa1122334455 in Windows in my example above. The Linux version will be in all caps and punctuated by ':' after every two characters - for example AA:11:22:33:44:55. 
5. Switch to root and cd to your Bluetooth config location /var/lib/bluetooth/[bth port  MAC addresses]. This directory will be the MAC address of your bluetooth controller, under which there are the directories with the MAC addresses of each paired bluetooth device. A file name `info` will be present under each of these directories, and it is the one we need to edit now:

    [LinkKey]
    Key=B99999999FFFFFFFFF999999999FFFFF

6. Restart your Bluetooth service in one of the following ways, and then it should work on both Windows and Linux without having to re-pair anything.
7. If for any reason you need to re-pair your device on Windows, you will need to repeat the above steps to ensure that the pairing key is identical between Windows and Linux or the pairing on the latter will keep working.

#### Devices with multiple keys and specific devices instructions

Bluetooth 5.1 devices may show more than one key under the Windows registry. Depending on the exact device, it will be then necessary to add all the keys into the info file under Linux, and under a specific variable.

This [table](https://wiki.archlinux.org/title/Bluetooth#Preparing_Bluetooth_5.1_Keys) on the Archlinux Wiki is quite complete. Be aware that the last column, "Destination Key File", means not a separate file but a key in the info file named `IdentityResolvingKey` or `SlaveLongTermKey` under which you will have the variable `Key` with the key copied from the Windows registry. I made the mistake of thinking these values would be a separate file and the pairing failed.

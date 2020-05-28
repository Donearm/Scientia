---
title: Windows Commands
bookCollapseSection: true
weight: 590
---

## Windows Registry tweaks

```c
* HKEY\_CURRENT\_USER\ControlPanel\Desktop
	* MenuShowDelay = Delay in ms at the opening of menus. Default is 400
* HKEY\_LOCAL\_MACHINE\System\CurrentControlSet\Control\Session Manager\Memory Management
	* DisablePagingExecutive = With 1, disable paging, forcing Windows to load everything into ram. Default is 0
	* LargeSystemCache = With 1, load at boot also the kernel into ram. Default is 0
* HKEY\_LOCAL\_MACHINE\System\CurrentControlSet\Control\Session Manager\Memory Management\PrefetchParameters
	* EnablePrefetcher = Enable prefetching of data on the hard disk. With 2, the default, only for Windows, with 3, for every applications
```

## Make a Windows Xp Corporate version cd

What you need:

* 1 X Original WINDOWS XP HOME EDITION CD
* 1 X Blank CDR/RW Disc (So you can rewrite it if you stuff up of course)
* 1 X Blank Formatted 3.5" Floppy Disk.
* [NERO Burning ROM 5.5.7.2](http://www.nero.com)
* NERO.REG file (Attached to this Post)
* [Smart Projects - ISOBUSTER Version 0.99.8](http://users.skynet.be/am032016/isobuster_all_lang_install.zip)
* SETUPMGR.EXE (In Deploy.cab on Windows XP CD)
* [CORPFILES.ZIP](http://www.corpfiles.fsworld.co.uk/corpfiles.zip)
* ISOBUSTER 0.99.8 Instructions

1. Insert your Original WINDOWS XP CD into the CD Drive & Start ISOBuster 0.99.8
2. Select BOOTABLE CD and right click, extract to Hard Drive
3. Select `WXHCCP_EN` Directory and right click, extract to Hard Drive.
4. Rename Folder `WXHCCP_EN` to `WXPPRO_EN`.
5. Download CORPFILES.ZIP & extract to a Temp Folder (e.g. CD Burning\Corpfiles)
6. Remove the following 3 files from the directory: `/i386/nt5inf.ca_ /i386/eula.txt /i386/win9xupg/win95upg.inf`
7. Now copy the remaining 8 files to the `"WXPPRO_EN` Directory you just created. (Overwrite all these files if asked) `/i386/dpcdll.dl_ /i386/oembios.bi_ /i386/oembios.ca_ /i386/oembios.da_ /i386/oembios.si_ /i386/pidgen.dll /i386/setupp.ini /i386/setupreg.hiv`

### NERO BURNING ROM 5.5.7.2 Instructions.

Download the file NERO.REG and extract to the Nero Burning ROM 5.5.7.2 Program Directory then run the file, this registry entry is required to make the XP CD Bootable. Eliminates the "Cannot Find NTLDR" error at boot up.

1. Start NERO BURNING ROM 5.5.6.4 and select New Compilation - CD BOOT
2. Drag & Drop all files from the `WXPPRO_EN` Directory in File Browser Pane to the Compilation Pane and save as `wxppro_en.nrb`
3. Select "Recorder" Menu and select your CD Writer from the list.
4. Select "Write CD" from the File Menu.
5. Select the INFO Tab - See that information page looks like this.
6. Select BOOT Tab -
In "Source of boot image data" section -
Select "Image File" radio button and Click on Browse. Select "all files".
Go to the Directory where you extracted the "Microsoft Corporation.img" file to, and select it.
Tick "Enable Expert Settings ( for advanced users only)" box.
In "Expert Settings" Section -
Select "No Emulation" from the list box.
In the "Boot Message" Box type "MICROSOFT CORPORATION"
In the "Load segment of sectors (hex!)" box type in "07C0"
In the "Number of loaded sectors" box type in "4" (Must be 4)
7. Select ISO Tab -
In "File-/Directorynames length" Section - Select "ISO Level 1(Max. of 11 = 8 + 3 chars)"
In "Format" Section select "Mode 1"
In "Character Set" Section select "ISO 9660"
Tick "Joliet" box.
In "Relax ISO Restrictions" Section tick both boxes. -
8. Select LABEL Tab -
Make sure "ISO 9660" is selected
In "Volume Label" - Type in `WXPPRO_EN` if not already there.
Leave "System Identifier" & " Volume Set" blank.
In "Publisher" & "Data Preparer" boxes type `MICROSOFT_CORPORATION` exactly as shown.
Tick "Also use the ISO 9660 text for Joliet" box.
9. Select DATES Tab - even though it is not that important
Set "Volume Creation" date & time to "23/08/2001 - 12:00:00 PM"
Set "Volume Modification" date & time to "23/08/2001 - 12:00:00 PM"
Set "Use this date" date & time to "23/08/2001 - 12:00:00 PM"
Note: It's Just that these are the file dates on Original Windows XP CD!!!!!
10. Select MISC Tab - Not Critical
Check Both boxes in "Caching" Section
Leave at "64" in "KB" box.
11. Select BURN Tab -
In the "Action" Section - Check boxes "Write" & "Finalize CD (No further writing possible)"
In the "Write Speed" box select a suitable Recording Speed - "4x (600 KB/s)" is a quite safe speed.
In the "Write Method" box select "Disc-At-Once"
In the "Number of Copies" box select as many as you want to copy.
Leave "Use Multiple Recorders" & "Do a virus check before burning" unchecked.
12. Click on the WRITE Button and Burn Baby Burn.

Congratulations !! You should now have a nice new Bootable Copy of "WINDOWS XP PRO"
Label your New CD as required and put it back in the CD Drive - if it should come up with the Set Up Dialog the same as Original Windows CD. Press Exit.
IMPORTANT: DO NOT select SETUP Yet!!!

### SETUP MANAGER Instructions

For a Complete Unattended Clean Install on a freshly formatted Hard Drive.

1. Format a 3.5" Floppy Disk & Label it " Windows XP AutoInstall Disk". Put it in the Floppy Drive.
2. Start "Windows Explorer" & go to the CDROM Drive where your New Windows XP Pro CD is.
3. Go to the "SUPPORT\TOOLS" Directory and extract all the files from the "DEPLOY.CAB" file into a new directory.
4. Go to the new directory and run the SETUPMGR.EXE program and the Wizard will take you through each Step.
	* Step 1 - Select "Create New Answer File".
	* Step 2. - Select "Windows Unattended Installation".
	* Step 3 - Select "Windows XP Professional".
	* Step 4 - Select "Fully Automatic".
	* Step 5 - Select "No, this Answer File will be used to install from a CD".
	* Step 6 - Select "I accept the terms of the Agreement".
	* Step 7 - Enter your appropriate "Name" & "Organisation" in boxes.
	* Step 8 - Select your "Display Setting" to suit yourself from the dropdown lists.
	* Step 9 - Select your appropriate "Time Zone" from the drop down list.
	* Step 10 - Enter the Product Key: FCKGW-RHQQ2-YXRKT-8TG6W-2B7Q8. This is the Corporate Volume Licensing Key to eliminate Windows XP Activation
	* Step 11 - Select "Automatically Generates Computer Name"
	* Step 12 - Enter any appropriate "Administrator Password" or just leave blank.
	* Step 13 - Select "Typical Settings" in Network Components.
	* Step 14 - Leave as "WORKGROUP" in Workgroup or Domain.
	* Step 15 - Select your Appropriate Country, Area Code & Dial Type in Telephony
	* Step 16 - Select "Use the Default Regional Settings for the Windows Version you are using" in Regional Settings
	* Step 17 - Select any other language support as necessary in Languages.
	* Step 18 - Select "Use Default Internet Explorer Settings" in Browser & Shell Settings
	* Step 19 - Select "A Folder Named Windows" in Installation Folder.
	* Step 20 - Leave Install Printers blank.
	* Step 21 - Leave Run Once blank.
	* Step 22 - Leave Additional Commands blank.
	* Step 23 - Select Floppy Drive and Save File As "winnt.sif" - Save as type "Remote Boot File(.sif)"
	* Step 24 - Setup Manager will advise you when it is Complete and shows the files on your Floppy Drive. Files Saved are " WINNT.SIF " & " WINNT.BAT ".

### WINNT.BAT Contents:

```posh
@rem SetupMgrTag
@echo off
rem
rem This is a SAMPLE batch script generated by the Setup Manager Wizard.
rem If this script is moved from the location where it was generated, it may
have to be modified.
rem
set AnswerFile=.\winnt.sif
set SetupFiles=I:\i386
I:\i386\winnt32 /s:%SetupFiles% /unattend:%AnswerFile% /copysource:lang
```

NOTE: The Drive Letter "I" refers to the CDROM Drive Letter. Change this as necessary to suit your CDROM Drive Letter.

Then save it and Write Protect the Disk.  

Don't Forget to Reset the BIOS to Boot From your CDROM first then HDD.  

Leave the Floppy Disk in the Drive before Booting with the Cracked #Windows XP Pro CD.  

You can leave the CD in the Drive when it reboots after Setup, Just don't hit any keys at boot up.  

## Windows Vista

enable login as Administrator. At command prompt:

```posh
net user administrator /active:yes
```

the Administrator account will be enabled without the need of entering a password. To disable it again:

```posh
net user administrator /active:no
```

## Use a network printer from a Cups server

As Url use: `http://$ip_pc_with_cups:631/printers/printer_name`

## Windows8

as W8 has the bad habit to set itself as the default element to boot under UEFI (and it probably does something similar under BIOS too) use

```posh
bcdedit /set {bootmgr} path \EFI\arch\vmlinuz-arch.efi
```

to change it to Linux. Here both `{bootmgr}` and `path` are literals and `vmlinuz-arch.efi` is the actual path of the Archlinux kernel to load. As I haven't found yet a way to pass parameters, I prefer directing Windows to use rEFInd thus
	
```posh
bcdedit /set {bootmgr} path \EFI\refind\refind_x64.efi
```

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

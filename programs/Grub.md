### Various Commands

* `convert -geometry 640×480 -colors 14 img img.xpm` = Convert an image in the format grub (legacy) accepts
* `grub-set-default num` = Tells grub which os to boot next time
* `elevator=scheduler` = Set the cpu scheduler to use (one between anticipatory, noop, deadline and cfq)

### Generate a standalone Grub bootloader for UEFI systems

First, have or generate a `grub.cfg`. `grub-mkconfig` is the command. Then 
create the path for it by `mkdir -p boot/grub/` and putting it there. Once done, 
generate the Grub2 standalone, with all the drivers embedded, with
	
	grub-mkstandalone --directory="/usr/lib/grub/x86_64-efi/" --format="x86_64-efi" --compression="xz" \ --output="/boot/efi/EFI/arch_grub/grubx64_standalone.efi" "boot/grub/grub.cfg"

of course, customize the output directory and the name of the grub executable as 
you wish. Then add the new grub entry to the UEFI boot list with `efibootmgr` 
thus

	efibootmgr -c -g -d /dev/sda -p 1 -w -L "Grub" -l '\EFI\arch_grub\grubx64_standalone.efi

again, customize the label (`-L`) as you prefer. And that's it, reboot!

# Grub2

+ `grub2-editenv list` = list kernel entries in the Grub2 local configuration
+ `grub2-mkconfig` = creates or updates a grub.cfg. On some systems it may be called `grub-mkconfig` or `update-grub`

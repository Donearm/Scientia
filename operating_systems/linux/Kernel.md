##Various kernel options

###Systemd

	net.ifnames=0

turns off predictable name logic for network cards. Revert to the old `eth0`, 
`eth1` etc.

###Acpi/Apic options

	no8259A - nolapic - noIapic - noapictimer - acpi=noirq irqpoll - no_timer_check - pci=biosirq - pic=irqroute - clock=pmtmr - notsc - acpi_use_timer_override

Plus:

	acpi_os_name= 
	
that needs a parameter, among "Microsoft Windows XP", "Microsoft Windows", "Microsoft Windows NT" or "Windows 2001". It's mostly useful to trick the BIOS into believing that it's dealing with Windows instead of Linux, which can help solve some Acpi issues.

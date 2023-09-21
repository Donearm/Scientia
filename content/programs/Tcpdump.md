---
title: Tcpdump
bookCollapseSection: true
weight: 631
---

### Various commands

+ `tcpdump 'tcp[13] & 2 != 0'` = Catch all SYN packets
+ `tcpdump 'tcp[13] & 4 != 0'` = Catch all RST packets
+ `tcpdump 'tcp[13] & 16 != 0'` = Catch all ACK packets

The `2`, `4` and `16` above correspond to the 13th byte in the TCP header and only grab packets that have a not zero 2nd bit there, matching thus different type of TCP packets.

---
title: Load Balancing 
bookCollapseSection: true
weight: 825
---

## Modes

* **Round Robin** = requests are distributed sequentially.
* **Least Connections** = new requests are distributed to the node with currently the least requests.
* **Source/IP Hash** = the IP source of the request is used to determine the destination node.

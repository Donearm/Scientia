## Netfilter chains

* **NF_IP_PRE_ROUTING** = called **PREROUTING** in `iptables`, this is all incoming traffic entering the network before any routing decisions happen.
* **NF_IP_LOCAL_IN** = called **INPUT** in `iptables`, it is triggered when incoming packets are routed if the destination is internal.
* **NF_IP_FORWARD** = called **FORWARD** in `iptables`, it is triggered when incoming packets are routed to an external destination.
* **NF_IP_LOCAL_OUT** = called **OUTPUT** in `iptables`, it is local outbound traffic that enters the network stack, before routing.
* **NF_IP_POST_ROUTING** = called **POSTROUTING** in `iptables`, it is triggered by outbound packets after being routed but before being actually transmitted.

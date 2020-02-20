## Netfilter chains

* **NF_IP_PRE_ROUTING** = called **PREROUTING** in `iptables`, this is all incoming traffic entering the network before any routing decisions happen.
* **NF_IP_LOCAL_IN** = called **INPUT** in `iptables`, it is triggered when incoming packets are routed if the destination is internal.
* **NF_IP_FORWARD** = called **FORWARD** in `iptables`, it is triggered when incoming packets are routed to an external destination.
* **NF_IP_LOCAL_OUT** = called **OUTPUT** in `iptables`, it is local outbound traffic that enters the network stack, before routing.
* **NF_IP_POST_ROUTING** = called **POSTROUTING** in `iptables`, it is triggered by outbound packets after being routed but before being actually transmitted.

## Firewalld

#### Zones

Each network interface can belong to a zone. Firewalld comes by default with 9 zones:

* drop
* public
* external
* block
* dmz
* work
* home
* internal
* trusted

#### Services

Services are a list of ports and destinations that match a service (like SSH).

#### IPSet

These are groups of IPs or MAC addresses, forming a set.

#### Various commands

All commands are temporary unless the `--permanent` switch is given.

* `firewall-cmd --list-all` = Lists the current general configuration
* `firewall-cmd --get-active-zones` = Lists the active zones
* `firewall-cmd --get-zone` = Lists all zones, not only the active ones
* `firewall-cmd --get-default-zone` = Show the default zone
* `firewall-cmd --list-services` = List enabled services in the current zone
* `firewall-cmd --add-service=$servicename` = Add a service by `$servicename` to the current zone
* `firewall-cmd --reload` = Reload configuration from disk
* `firewall-cmd --get-ipsets` = List all IPSets
* `firewall-cmd --new-ipset=$ipsetname --type=hash:ip` = Create a new IPSet with name `$ipsetname`
* `firewall-cmd --ipset=$ipsetname --add-entry=10.0.1.11` = Add IP 10.0.1.11 to the IPSet with name `$ipsetname`
* `firewall-cmd --ipset=$ipsetname --get-entries` = Show members of IPSet `$ipsetname`
* `firewall-cmd --zone=drop --add-source=$address` = Send all traffic coming from `$address` to the drop zone. Can be used also with an IPSet like `--add-source=ipset:$ipsetname`
* `firewall-cmd --zone=webserver --add-forward-port=port=80:proto=tcp:toaddr=$address` = Example of port forwarding to a web server running at `$address`

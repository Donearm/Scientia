---
title: Ssh
bookCollapseSection: true
weight: 636
---

### General commands

* `ssh-copy-id user@host` = Copy own public key to user@host
* `ssh -N -L8878:localhost:80 host` = Bind host:80 on localhost:8878 with a tunnel
* `ssh -t host1 ssh host2` = Connect to host2 via host1
* `ssh -fX user@host cmd` = Launch cmd, a graphic one, using X11 forwarding (which needs to be enabled in xorg.conf, AFAIK)
* `ssh -t remote_host screen -r` = Attach a screen session on the remote host on the local one
* `cat ~/.ssh/id_rsa.pub | ssh user@host "mkdir ~/.ssh; cat >>  ~/.ssh/authorized_keys"` = Copy own public key to user@host when `ssh-copy-id` isn't available

### Public Key authentication

Dsa keys are the most recent format, Rsa ones are older

add the keys in `~/.ssh/authorized_keys2`. Make sure that in hosts.allow the localhost and lan are enabled like this:

```toml
sshd: 127.0.0.1
sshd: 192.168.1.
```

In the `ssh_config` file be sure to list the preferred authentication methods as:

```cfg
PreferredAuthentications publickey
```

and in `sshd_config` enable just the public key authentication with:

```cfg
PubkeyAuthentication yes
ChallengeResponseAuthentication yes
PasswordAuthentication no
```

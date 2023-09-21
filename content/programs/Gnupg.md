---
title: Gnupg
bookCollapseSection: true
weight: 620
---

## Backup your keys

```sh
gpg --export --armor your@id.here > your@id.here.pub.asc
gpg --export-secret-keys --armor your@id.here > your@id.here.priv.asc
gpg --export-secret-subkeys --armor your@id.here > your@id.here.sub_priv.asc
gpg --export-ownertrust > ownertrust.txt
```

By omitting the `--armor` option you obtain an encrypted output with the full 
key (commonly saved with a .gpg extension).

It is also advisable to generate and save a revoke certificate for each key in 
case they get compromised. Use this command for each key:

```gpg --gen-reokve your@id.here > your@id.here.revokecert```

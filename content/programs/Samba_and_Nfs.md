---
title: Samba and Nfs
bookCollapseSection: true
weight: 633
---

### Mount Samba shares on Linux

```bash
mount -t smbfs -o username=david,password=test //pc_con_smbd/david /mnt/local_directory
```

and add to fstab:

```posh
//pc_con_smbd/david /mnt/local_directory smbfs rw,username=david,password=test,noauto
```

### Configure network printer in Cups

with `lpinfo -v` can be listed all network protocols, with URIs, available on the local computer

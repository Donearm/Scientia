---
title: Zfs
bookCollapseSection: true
weight: 860
---

## Useful commands

* `arc_summary` = show the status of the ARC, Adaptive Replacement Cache, the RAM-based disk cache of ZFS
* `zfs set mountpoint=$path $pool` = change the mountpoint of `$pool` in `$path`
* `zfs rename $datastore $datastorenew` = rename a data store
* `zfs get compressratio $pool` = get the compression rate of `$pool` (may be a pool or a data store)
* `zfs list -r -t snapshot` = get all the snapshot, in general or of a specific pool/data store if specified

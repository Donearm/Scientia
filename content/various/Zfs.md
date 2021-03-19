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

## ZFS encrypted datasets

* `zfs get -p encryption,keystatus,keylocation,pbkdf2iters $dataset` = show details about an encrypted dataset
* `zfs-load-key $dataset` = load the key for the specified dataset, enabling access to it
* `zfs-unload-key $dataset` = unload a previously loaded key for a data set, preventing it from being accessed later without giving the key again
* `zfs mount $dataset` = mount the dataset
* `zfs unmount $dataset` = unmount the dataset

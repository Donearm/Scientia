---
title: Rtorrent
bookCollapseSection: true
weight: 626
---

### Add trackers to a torrent

Select the torrent. Press `Ctrl+x` and insert this command:

```cfg
d.tracker.insert="3","url_of_tracker"
```

where `3` is the next slot in the tracker list (usually 1 is occupied by the site the torrent was downloaded from and 2 by dht) and `url_of_tracker` is obviously the url of the new tracker. Might be necessary to do a tracker update request with `T` (or just wait a bit and rtorrent will do it by itself)

---
title: HTTrack
bookCollapseSection: true
weight: 623
---

## Mirroring a site but keeping only files matching a pattern

```bash
httrack website -W -O "/path/to/save/the/website" -%v +*.pdf +*.html +*.htm
```

This mirrors `website` but actually saves only html and pdf documents

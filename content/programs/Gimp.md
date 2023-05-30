---
title: Gimp
bookCollapseSection: true
weight: 617
---

### Retouch scanned images

Order of operations: first crop all not needed elements (borders etc.). Then resample to desired size and dpi. Then use blur to remove moiré and paper marks. Then it's the turn of modifying colours, transparency, brightness etc. and finally the image can be sharpened

### Scale a selection of an image

1. Make a normal selection. If the selection is meant to be pasted into another image or file, do respect the ratio of the final shape the selection will be pasted in.
2. In the "Select" menu, choose "float". This will create a floating layer.
3. Right click on this new layer and select "Scale Layer".
4. Choose the desired size.
5. The selection is scaled and ready to be copied and pasted elsewhere.

### Various plugins to try

#### Filters->Defocus
* Gaussian
* Selective Gaussian = 6-255 (no moirè); 3-200 (little moiré without getting too out of focus)

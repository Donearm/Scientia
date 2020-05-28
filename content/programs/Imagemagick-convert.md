---
title: Imagemagick Convert
bookCollapseSection: true
weight: 623
---

### Create an animated gif

A directory already containing the image files that will compose the animated gif is needed. If the images have an incorrect aspect ratio or there's part of the image that isn't desired to end up in the gif, crop with `convert` thus:
L'area prescelta si calcola a partire dal vertice in alto a sinistra dell'immagine. Per selezionare da dove partire con il taglio impostare così: `wwwXhhhx+nnn+nnn` dove nnn sta per l'altezza e la larghezza da cui partire con il taglio e www e hhh per le dimensioni del taglio stesso

	for jpegs in ./*.jpg; do convert -crop wwwXhhh+nn1+nn2 $jpegs crops/`basename $jpegs` ; done

where `www` is the width and `hhh` the height of the resulting image and `nn1` and `nn2` are respectively the height and width from where to start calculating the final width and height. For example, a source image of 1600x1200, using convert like `1400x1100+10+20` means that the final image will be 1400x1100 and it will be extrapolated 10 pixel from the left and 20 pixel from the top of the source image, thus excluding some part of it on the top and left. Then:

	convert -adjoin -delay ms -resize 80×80! +map crops/* final.gif

will create an animated gif (final.gif) with a delay between frames of ms, a size of 80x80 (here the `!` means disregard aspect ratio and force resizing) and with optimized colours and transparency to reduce final size (+map)

### Tweak brightness and contrast

	convert -level blackpoint%,whitepoint%,gamma

blackpoint and whitepoint are the limit over which the black and white pixel will be discarded, in a percentage. Therefore, removing the blackest and/or whitest pixels can reduce the overall contrast of the image. Gamma increases or decreases the overall brightness. Default value is 1.0, lower it to dim and increases it to brighten

### Change main colour of an icon

	convert \( icon.png -alpha extract \) -background "#ffffff" -alpha shape white-icon.png

Convert an icon main colour, the foreground one, to white. Colours can be any of those listed at [Color Names](http://www.imagemagick.org/script/color.php)

### Various

* `convert file.pdf img_%04d.png` = Convert all the images in a pdf in png, using 4 digits to enumerate the images
* `convert -quality 0.75 -interlace None -type TrueColor -resample 96×96 -resize resolution img img.out` = Make an image ready to be used at boot (generally for Grub legacy)
* `convert -colors n` = Modify the number of colours in an image 
* `convert -despeckle` = Reduce the noise of an image, mixing the contrasting pixels better. It may slightly increase the size of the image though
* `convert image1 image2 +append finalimage` = Join `image1` and `image2` (a potentially infinite number images may be used) into `finalimage`, horizontally. Images should be of the same length or there'd be a background added to the shorter one for padding
* `convert -flip image image.out` = Vertically mirror image to `image.out`. Using `-flop` instead mirrors horizontally
* `identify -format "%w x %h %x x %y\n" image` = Print resolution and dpi of image
* `convert image -fill '#000000' -opaque none image.out` = change background colour to `#000000`
* `convert image -fill black -colorize 75% image.out` = make it more opaque the image, in this case by 75% and towards black, effectively rendering an image darker. Can be done towards any colour
* `convert image -channel rgba -background "rgba(0,0,0,0)" image.out` = convert `image` to `image.out` and makes background fully transparent

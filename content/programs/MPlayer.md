---
title: MPlayer
bookCollapseSection: true
weight: 629
---

Quick cheatsheet for MPlayer. Most of the options are identical in MPV too, which is the program I currently use.

* `-afm dmo` = Sometimes useful to reproduce files with out of sync audio
* `-ss HH:MM:SS` = Start playing at HH:MM:SS
* `-frames n` = Stop playing after `n` frames
* `-vc null -vo null -ao pcm:fast:waveheader:file=$file` = Convert an audio file to a wav
* `mplayer video -vf cropdetect` = Try to detect the areas of video to crop
* `mplayer video -vo jpeg:outdir=dir/ -nosound` = Write every frame of video as a jpeg image in outdir
* `mplayer video -vo gif89a:output=filedioutput.gif:fps=5 -nosound` = Make an animated gif from a video (usually in very low quality)
* `mplayer video -vo xvmc:bobdint:queue -vc ffmpeg12mc` = To make use of the hardware acceleration of the XvMC protocol
* `-sub subtitles` = Load subtitles (generally it's a `.srt` file)
* `-loop n` = Loop a video `n` times (use 0 to loop forever)
* `-nosound -vo x11 -zoom -rootwin -loop 0 video` = Options needed to use a video as desktop background. Other video outputs can work too as long as they support zooming
* `-vf delogo=x:y:w:h:-1` = Remove a logo from a video. `x` and `y` are coordinates from the top left corner of the video, `w` and `h` are width and height of the logo to be removed and `-1` highlights the border of the are so to find where the filter is working more easily (clearly to be removed in the final output)
* `~/.mplayer/subfont.ttf` = Symbolic link to a TrueType font to use for subtitles
* `-vf screenshot` = Enable taking screenshots. With `s` save current frame, with `Shift+s` starts saving every frame to a file until `Shift+s` is pressed again
* `-af volume=30:1:0` = Increases or lowers the volume beyond the sound card limits. Here 30 means 30dB more than the limit. 1 enables soft clipping to reduce distorsions. Volume ranges from -200 to 60 (dB), where 0 is clearly the default
* `-dumpfile file -dumpstream url` = Save url to file

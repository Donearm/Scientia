###Commands

* `ffmpeg -i file` = Show info about file
* `ffmpeg -i file -acodec libmp3lame -ab 320k file.mp3` = Extract only audio from file and encode it at 320kb/s as mp3
* `ffmpeg -i file -acodec pcm_s16le file.wav` = Extract only audio from file and encode it as wav
* `ffmpeg -f x11grab -qscale n -s WidthxHeight -r fps -i :0.0+x,y file` = Capture what's on screen on a video of size `WidthxHeight`, at given fps and using the X server `:0.0`, starting from pixel x and y (counting from the top left corner of the screen). Set quality with `-qscale`, where n=1 is best and n=31 is worst quality
* `ffmpeg  -v 2 -y -i file.ts  -b 1200k -bt 4000k -vcodec mpeg4 -pass 1 -an file_output` e `ffmpeg -v 2 -y -i file.ts -b 18000k -bt 18000k -vcodec mpeg4 -pass 2 -acodec libmp3lame -ac 2 -ar 48000 -ab 128k file_output` = 2 pass conversion from ts to avi (mpeg4). Increase values of `-b` and `-bt` to increase output quality
* `-ss hh:mm:ss` = Start at the given time
* `-t hh:mm:ss` o `-t number` = Stop processing at given time or after `number` of minutes
* `ffmpeg -acodec copy -vcodec copy -ss hh:mm:ss -t hh:mm:ss -i file file_output` = Extract, without encoding, from file between the two time given
* `ffmpeg -acodec flac -ab 192k -i input_file output_file` = Reencodes corrupted or out of sync flac files

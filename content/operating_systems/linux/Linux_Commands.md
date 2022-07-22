---
title: Linux Commands
bookCollapseSection: true
weight: 540
---

A variegated collection of useful Linux commands, in no particular order
  
* `testparm smb.conf` = Check the syntax of the Samba configuration file
* `cat /proc/interrupts` = Show the IRQs
* `cat /proc/dma` = Show the DMA channels
* `alignmargins` = Align margins of a printer (it actually prints a test page with the margins)
* `import img` = Take a screenshot of the desktop in `img`
* `xwd -out img` = Take a screenshot of a window (to be selected with the mouse) and saves it in `img` in a format readable by `xwud`
* `tput reset` = Reset (clean) the terminal
* `display 'vid:*.jpg'` = Make a thumbnails gallery of all the images in the current directory
* `montage $images outputimg` = Make a single image of all `$images`
* `zip -J file.zip /directory/files` = Make a zip file of files stripping the directories tree (basically, put every file at the same level in the zip file)
* `lsof -V -P` = Show all opened ports and the relative processes
* `lsof (file|device)` = Show the processes using file|device
* `lsof -i TCP:4000` = Check if a specific port is in use
* `cdrecord dev=scsihost blank=fast` = Blank a CDRW in fast mode. Use "all" for the complete mode
* `ss -s` = Print statistics about the network packets
* `tcpdump -q` = Show packets that are being transferred over the network
* `xwininfo` = Show many informations about the selected window
* `uuencode file name | mail user` = Encrypt the binary file as "name" and send it via e-mail to "user"
* `uudecode file` = Decrypt a file
* `nmap -P -O url` = Inquiry about open ports and the OS running on url
* `perl -MCPAN -e 'install module'` = Install a Perl module
	* `perl -Mmodulename -e 1` = Check if "modulename" is already installed
* `useradd -d home -g group -G group1,group2 name` = Add an user with "name", with home directory as "home", that belongs to group "group" and also to "group1" and "group2"
* `mkisofs -v -r -l --allow-leading-dots -R -J -T -o img.iso files` = Make an iso file (RockRidge + Joliet)
* `split -B size file outputfile` = Split file in as many pieces of outputfile as given size (in bytes)
* `rar a -v1000000k archive.rar file` = Make a rar archive of at most 1000000 kilobytes from file(s)
* `xrdb -load .Xdefaults` = Load configuration in `.Xdefaults` 
* `perl -e shell -mcpan` = Open a shell to manage Perl modules
	* `i /module/` = Search a module
	* `install module` = Download and install a module
* `formail -s procmail < mbox` = Scan a mbox with the current Procmail rules
* `setkeycodes code n` = Map an unrecognized key to n so it can be bind to an atcion with `xbindkeys` (see logs to discover the code)
* `xev` = Show info about the pressed key
* `bogoutil -p wordlist.db word` = Show if word is classified as ham or spam by bogoutil
* `sox file.wav -v n output.wav` = Raise or lower volum of a wav according to the value of n (the higher it is, the higher it'll be the volume too)
* `screen -xRR` = Launch screen at login. To be inserted in the shell configuration file (bashrc, zshrc etc.)
* `growisofs -Z /dev/hdd=image.iso` = Burn the iso file in the specified device
* `cupsdoprint -H localhost:631 -P printername -J jobname -U login_name file.ps` = Print the file.ps with the selected printer
* `dvdauthor -T directory` = Create the TOC (the file VIDEO\_TS.IFO) of a dvd in directory
* `dvdauthor -t dvdvideos -v videooptions -a audiooptions directory` = Make the vob files from videos using the parameters for video and audio given 
* `gtf hhhh wwww refresh_rate` = Print the Modeline for `xorg.conf` of the given resolution (height and width) and refresh rate (in Hz)
* `cat /proc/fb0/modes` = Show supported resolution by the current framebuffer device (fb0)
* `pacman -Qqe | grep -vx "$(pacman -Qqm)"` = Print the list of installed packages in Archlinux (does not include those in AUR)
* `zcat initrd_image.img | cpio –list` = Show contents of a cpio boot image
* `pdfimages -j file.pdf directory` = Extract in ppm (Gimp can open it) all the images in file.pdf to directory. Pdfimages is in poppler package
* `curl -o /dev/null -s -w %{time_connect}:%{time_starttransfer}:%{time_total} url` = Returns, respectively, the time needed to connect to url, the time the server took to reply and the total time taken to satisfy the request
* `wget -E -H -k -K -p -x webpage` = Download webpage, followin images and css links and converting them to local to make browsing offline easier
* `wget -e robots=off --wait 1 -x -m -k url` = Download url, convert link to local, wait 1 second between requests to not overload the server and ignore the robots file
* `udevinfo -a -p `udevinfo -q path -n device` ` = Get info on a device useful to then write an udev rule about it
* `ffmpeg -i video audio` = Extract audio from a video. To know in what format it is, use `ffmpeg -i video` and look for the line that says "Stream.....Audio"
* `ffmpeg -i youtube.flv -ar 48000 -ac 2 -b 800000 youtube.avi` = Convert in an avi a flv file, fixing audio out of sync issues. `-b` is the bitrate, increase it to make the final result look better (and bigger)
* `w` = Show info about the users logged and what processes they have launched
* `stat file|directory` = Show complete info about a file or a directory (inode number, size, occupied clusters, modification/access time etc.)
* `trap 'echo message' EXIT` = Execute the command, in this case echoing "message", when the script/shell receives the signal to exit (EXIT)
* `cat /proc/cmdline` = Show kernel parameters sent at boot
* `nmap -sV host` = Scan all open ports on host, trying to identify also the services using them
* `netstat -antulp host` = Scan open ports and active connections on host, returning also information on the processes
* `cdrdao copy --on-the-fly --speed 4 --read-raw --fast-toc --device 0,1,0 --driver generic-mmc-raw --source-device 0,0,0 --source-driver generic-mmc-raw` = On the fly copy of a cd (check the device numbers, of course)
* `cdrdao read-cd --device 6,0,0 --driver generic-mmc-raw -v 2 --datafile CD.bin --read-raw CD.toc` = On the fly copy of a cd containing multisession tracks
* `kill -9 $(ps -o pid= -u user)` = Kill all processes started by a given user, basically stopping his use of the computer
* `find / -xdev -type d \( -perm -0002 -a ! -perm -1000 \) -print` = Find all directories that haven't the sticky bit set and are writable by everybody (a known security hole)
* `find / -xdev -type f \( -perm -4000 -o -perm -2000 \) -print` = Find all files with suid/sgid set
* `find / -xdev -type f -perm -0002 -print` = Find all files that are editable by everybody
* `find / -xdev \( -nouser -o -nogroup \) -print` = Find all files that haven't a group or a user or have and invalid one
* `cat /proc/net/nf_conntrack` = List all recent connections, with ports, addresses and protocols. Needs Ip Conntrack support in the kernel
* `modinfo module` = Show detailed info about a kernel module
* `ls -d */` = Show only subdirectories of the current directory
* `lsof +p pid` = Show opened files by the process with that pid
* `ffmpeg -f x11grab -r 25 -s 800x600 -i :0.0 /tmp/outputFile.mpg` = Record a screencast of the desktop at 25fps with a 800x600 resolution
* `grep ^[^#] config_file` = Strip and print a file of comments (#) and empty lines
* `grep -v '#' config_file` = As above but keep empty lines
* `identify -format %[exif:*] img` = Show Exif data of img
* `curl -v url` = Connect to url and show request and response http headers
* `pacman -Qm` = Show installed packages that aren't present in the pacman database. Usually they are local and aur packages
* `diff -rupN original_dir/ new_dir/ > file.patch` = Make a patch containing the differences in all files between `original_dir` and `new_dir`
* `netstat -c host` = Show info about connection of host in a continuosly updated way (needs to be killed then)
* `curl --head -s url -D -` = Connect to url with a HEAD request, outputting only the response headers
* `cuebreakpoints file.cue | shnsplit -o flac file.flac` = Split a flac file containg a full album into tracks according to the cue file
* `cuetag.sh file.cue split-track*.flac` = Add tags to the various tracks from the cue file. Usually it is to be after `cuebreakpoints`
* `sp-sc link 3908 8908 > /dev/null &` = Connect to the Sopcast link at port 3908 and open to listen on localhost on port 8908
* `mplayer http://localhost:8908/tv.asf` = Play the Sopcast video from above
* `pgrep cmd` = Return the pid of cm. Like `ps | grep cmd` but doesn't print also the grep pid
* `csplit file model` = Split file in various copies named like xx00, xx01 etc. Model can be a line number or a regular expression
* `env -i cmd` = Ignore any environment variable for the execution of cmd
* `ls | grep -x ".\{6\}"` = Return only file or directory names whose name is long exactly 6 characters
* `find path -size +1000k` = Find only files bigger than 1Mb in path. Using instead `-1000k` looks for files smaller than 1Mb and without both `-` and `+` looks for files of exactly 1Mb
* `fc` = Open with `$EDITOR` the last executed command and thus enable modifying it, reexecuting it at the end
* `ls -t` = List files ordered by modification date, the most recent first
* `ls -X` = List files ordered by extension
* `ls -S` = List files ordered by size, the bigger ones first
* `find | xargs file` = List files in current directory as it was used the command `file` on them all
* `cat > file` = Write text to a file without any need of a real editor. Start typing after this command and terminate input with Ctrl+d
* `bind -P` = Show all available Bash functions and their keybindings
* `objdump -D prog` = Disassemble `prog`
* `grep -H regexp files` = Print filename of every files matching the regexp
* `openssl x509 -noout -fingerprint -in cert.pem` = Print the SHA1 checksum of the certificate cert.pem
* `openssl s_client -connect server -showcerts` = Show SSL info and certificates of server
* `openssl s_client -host server -port portnumber -verify 1 -debug` = debug a secure connection with `server` on `portnumber`
* `nm -D cmd` = Show all names, variables and functions, used by cmd
* `cat /proc/pid/smaps` = Show loaded memory segments by the process with such `pid`
* `genisoimage -r -J -o file.iso directory` = Make an iso, readable both on Windows and Linux, of the files in directory
* `wodim -v dev=/dev/sr0 file.iso` = Burn on the empty medium in /dev/sr0 the iso
* `top -pnnn -pnnn` = Start top telling it to monitor only processes whose pid is `nnn`
* `loginctl  list-seats` = Lists seats
* `loginctl seat-status seat0` = Shows list of hardware assigned to `seat0`
* `grep -Ri --include="*.py" abc directory/` = Search for "abc" in directory but only considering `.py` files
* `lspci -k` = Print a list of active hardware devices with the corresponding kernel module they need to work
* `modprobe -c` = Display a complete module configuration, including defaults and directives in /etc/modules.conf (or /etc/modules-load.d/, depending on the Linux distribution)
* `ip route show` = Display routing table
* `ip route show table 255` = Display local addresses route table
* `ip route add prohibit 1.1.1.1` = Prohibit all access to the specified IP address
* `ip addr show` = Display IP and MAC addresses of every network interface
* `arp` = Display the ARP cache
* `msgcat --color=test` = Output various tests to check the appearance of colours on your terminal
* `gcc -E file.c` = See all the declarations from file.c and from all the headers included by it
* `date -d "string"` = Emits current date and time modified by string. For example, `2 days` will add 2 days to current date, `1 hour ago` will subtract 1 hour, `last year` will emit the date exactly 1 year ago etc.
* `date -r file` = Returns when the file was last modified
* `who -b` = Print time and date of the last system boot
* `watch -n 10 kill -USR1 4834` = Print every second (0.1sec * 10) the status of the process having pid 4834
* `diff -rq dir1/ dir2/` = Print a summary of the differences between  `dir1` and `dir2`
* `cat -s file` = Output only non-repeated lines from file. Like `uniq`
* `cat -a file` = Output file showing tabs, non printing characters and a `$` for each newline character. It's the same as using `cat -vET`
* `stapler sel input.pdf 23-25 33 40-60 output.pdf` = Create a new pdf (`output.pdf`) from `input.pdf` only including a specific range of pages (in the example, 23 through 25, the page 33 and from page 40 through 60)
* `bsdtar xf zipfile` = Extract from a zip archive. It may work also with incomplete/corrupt ones or in general where `unzip` won't.
* `find . -name "pattern" -ls | awk '{total += $7} END {print total}'` = Print the total size of files matching `pattern`
* `curl -X POST -d "fname=Mark&lname=Babe" url` = Send a POST request to `url` with given parameters. It's also possible to send a JSON file containing the parameters using `-d @parameters.json` syntax
* `du -s directory/` = Show only the total sum of occupied space on disk of `directory`, and not every single file also
* `find Maildir/ -type f | grep -vE ',[^,]*S[^,]*$'` = Find all unread emails in the maildir (Maildir format)
* `nl $file` = Print the file with the lines' numbers next to each line. By default it skips empty lines, to include them add `-b a`.
* `ip -s link show` = Print all the network interfaces present on the system with additional statistics about them
* `ip neighbour show` = Show the ARP table
* `route add -host $ip reject` = Reject all traffic to host with IP address of `$ip`
* `ls -Z` = Display SELinux context for the files
* `last` = Display a chronological list of users' accesses
* `lastb` = Display a chronological list of failed users' accesses ("bad logins")
* `lastlog` = Display the last accesses of each daemons and users
* `dig $domain +noall +answer` = Display the IP address of `$domain` with a TTL of how long the data is kept in local DNS cache
* `file -i $filename` = Show the mimetype and locale of `$filename`
* `ddjvu --format=pdf file.djvu file.pdf` = Convert a djvu file to a pdf
* `gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dBATCH -sOUtputFile=file.pdf file_to_optimize.pdf` = Compress and optimize a pdf. `/ebook` means a medium quality, 150dpi. Alternatives are `/prepress`, which produces a 300dpi pdf, and `/screen`, for a 72dpi, good for screen reading only, pdf
* `pactl list | grep codec` = Check what bluetooth codec is being used (need bluez and pavucontrol installed)
* `yt-dlp -S "res:720" video` = Download `video` but only up to 720p resolution, or lower if not available

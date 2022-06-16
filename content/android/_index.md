---
title: Android
bookCollapseSection: true
type: docs
weight: 100
---

* [Performance tweaks](#performance-tweaks)
* [Save Battery](#save-battery)
* [Increase overall touch responsiveness](#increase-overall-touch-responsiveness)
* [Raise photo and video recording quality](#raise-photo-and-video-recording-quality)
* [3G signal tweaks](#3g-signal-tweaks)
* [Net Tcp speed tweaks](#net-tcp-speed-tweaks)
* [Disable blackscreen issue after call](#disable-blackscreen-issue-after-call)
* [Various](#various)
* [Uninstall sytem app](#uninstall-system-app)

-----------

# Performance tweaks
In `/system/build.prop` edit:

```cfg
ro.~HOME_APP_ADJ=1
```

to force launcher into memory

```cfg
ro.media.enc.jpeg.quality=100
```

to raise jpeg quality to 100%

```cfg
dalvik.vm.heapsize=48m
```

specifies the VM heapsize

```cfg
debug.sf.hw=1
```

to render UI with the GPU

```cfg
ro.telephony.call_ring.delay=0
```

to decrease dialing out delay

```cfg
windowsmgr.max_events_per_sec=150  
```

help scrolling responsiveness

### Save battery

```cfg
wifi.supplicant_scan_interval=180
pm.sleep_mode=1
ro.ril.disable.power.collapse=0
```
  
while

```cfg
persist.adb.notify=0  
```

disables debugging notify icon on statusbar

### Increase overall touch responsiveness

```cfg
debug.performance.tuning=1
video.accelerate.hw=1
```

### Raise photo and video recording quality

```cfg
ro.media.dec.jpeg.memcap=8000000
ro.media.enc.hprof.vid.bps=8000000
```

### 3G signal tweaks

```cfg
ro.ril.hsxpa=2
ro.ril.gprsclass=10 
ro.ril.hep=1
ro.ril.enable.dtm=1
ro.ril.hsdpa.category=10
ro.ril.enable.a53=1
ro.ril.enable.3g.prefix=1
ro.ril.htcmaskw1.bitmask=4294967295
ro.ril.htcmaskw1=14449
ro.ril.hsupa.category=5
```

### Net Tcp speed tweaks

```cfg
net.tcp.buffersize.default=4096,87380,256960,4096,16384,256960
net.tcp.buffersize.wifi=4096,87380,256960,4096,16384,256960
net.tcp.buffersize.umts=4096,87380,256960,4096,16384,256960
net.tcp.buffersize.gprs=4096,87380,256960,4096,16384,256960
net.tcp.buffersize.edge=4096,87380,256960,4096,16384,256960
```

### Disable blackscreen issue after call

```cfg
ro.lge.proximity.delay=25
mot.proximity.delay=25
```

### Various

```cfg
ro.config.hwfeature_wakeupkey=0  
```
	
the phone will not wakeup from hitting the volume rocker

```cfg
ro.mot.buttonlight.timeout=0
```
	
force button lights on when the screen is on too

```cfg
ro.mot.buttonlight.timeout=0  
```
	
disable boot animation for faster boot

## Uninstall system app

This may not work on all devices as some will just "disable" those apps, not showing them as an icon but still listing them among the installed apps, occupying disk space. But at least the process won't start and won't occupy memory and use battery time.

* Connect to the device using `adb`
* Check for the name of the package to uninstall with `pm list packages -f $packagename`
* Uninstall it with `pm uninstall -k -user 0 $packagename`, where `$packagename` is the output of the previous command

Nexus
=====
Currently Nexus utilizes a single directory within the bbb codebase: labs/bbb-api-php

We import this library into our codebase by 

1. fork of bigbluebutton to kdflint/bigbluebutton-ship
2. fork of kdflint/bigbluebutton-ship to NorthBridge/bigbluebutton-community
3. symbolic link from bbb-api-php folder to nexus codebase

Adds to BBB deployment

1. our custom default.pdf, copied to `/var/www/bigbluebutton-default/default.pdf`
2. speed test images - see code for path
3. Also, we have customizations to bbb-api.php


BigBlueButton
=============
BigBlueButton is an open source web conferencing system.  

BigBlueButton supports real-time sharing of audio, video, slides (with whiteboard controls), chat, and the screen.  Instructors can engage remote students with polling, emojis, and breakout rooms.  BigBlueButton can record and playback all content shared in a session.

We designed BigBlueButton for online learning (though it can be used for many [other applications](http://www.c4isrnet.com/story/military-tech/disa/2015/02/11/disa-to-save-12m-defense-collaboration-services/23238997/)).  The educational use cases for BigBlueButton are

  * One-to-one on-line tutoring
  * Small group collaboration 
  * On-line classes

BigBlueButton runs on a Ubuntu 16.04 64-bit server.  If you follow the [installation instructions](http://docs.bigbluebutton.org/install/install.html), we guarantee you will have BigBlueButton installed and running within 30 minutes (or your money back :-).

For full technical documentation BigBlueButton -- including architecture, features, API, and GreenLight (the default front-end) -- see [http://docs.bigbluebutton.org/](http://docs.bigbluebutton.org/).

BigBlueButton and the BigBlueButton Logo are trademarks of [BigBlueButton Inc](http://bigbluebutton.org) .

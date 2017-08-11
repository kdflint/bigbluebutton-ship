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
BigBlueButton is an open source web conferencing system for on-line learning.  

We believe that every student with a web browser should have access to a high-quality on-line learning experience.  We intend to make that possible with BigBlueButton. 

BigBlueButton supports real-time sharing of slides (PDF and any document readable by LibreOffice), webcams, whiteboard, chat, voice over IP (using FreeSWITCH), and desktop.  It can record and playback all content shared in a session.  The use cases for BigBlueButton are

  * One-to-one on-line tutoring
  * Small group collaboration 
  * On-line classes (50 or less)

For more information on the latest release -- including installation instructions, demo server, API, and overview of architecture -- see [http://docs.bigbluebutton.org/](http://docs.bigbluebutton.org/).

BigBlueButton and the BigBlueButton Logo are trademarks of [BigBlueButton Inc] (http://bigbluebutton.org) .

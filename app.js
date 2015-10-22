var express = require('express');
var throng = require('throng');

//var cpus = process.env.WEB_CONCURRENCY || 4;
var cpus = 4;
throng(start, { workers: cpus, lifetime: Infinity });

function start() {
  console.log('Started worker' + process.pid);
  process.on('SIGTERM', function() {
     console.log('Worker exiting' + process.pid);
     process.exit();
  });
}


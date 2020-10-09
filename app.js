let Readable = require('stream').Readable;
var stream = require('stream')

var s = new Readable()
s.push('beep')
s.push(null)  

var data = s.pipe(new stream.PassThrough())
var info2 = s.pipe(new stream.PassThrough())
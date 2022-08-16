const fs = require('fs')
var cont =fs.readFileSync(process.argv[2])
var ling=cont.toString().split('\n').length-1
console.log(ling)
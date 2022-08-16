var mymodule = require('./mymodule.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

mymodule(dir,filterStr,function(err,list){list.forEach(element => {console.log(element)})})
    


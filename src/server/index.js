var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.send('hi!')
})

app.listen(3000,function(){
console.log('app listening to the port 3000')
})
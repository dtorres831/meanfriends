var mongoose = require ('mongoose')
var path = require('path')
var fs = require('fs')
var modelpath = path.join(__dirname, './../models')
mongoose.connect('mongodb://localhost/meanfriends')

fs.readdirSync(modelpath).forEach(function(file){
  if(file.indexOf('.js')>=0){
    require(modelpath + '/' + file)
  }
})

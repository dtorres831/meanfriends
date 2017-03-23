var mongoose = require('mongoose')
var Schema = mongoose.Schema
var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  bday: Date
})

mongoose.model('User', UserSchema )

 var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = (function () {
  return{
    create: function(req,res){
      var user  = new User(req.body)
      //make sure id shows when you console.log
      user.save(function (err, data) {
        if(err){
          console.log(err);
        }else{
          res.json(data)
        }
      })

    },
    getAll: function (req, res) {
      User.find({}, function (err,data) {
        res.json(data)
      })
    },
    delete: function (req, res) {
      User.remove({_id:req.params.id}, function (err) {
        res.json({status:true})
      })
    },
    change: function (req, res) {
        User.findOne({_id:req.body._id},function (err,user) {
          user.firstname = req.body.firstname;
          user.lastname = req.body.lastname;
          user.bday = req.body.bday;
          user.save(function (err,user) {
            res.json(user)
          })
        });
      }
    }
  })()

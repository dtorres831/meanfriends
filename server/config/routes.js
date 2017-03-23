var user = require('./../controller/users.js')
console.log(user);
module.exports = function (app) {
  app.post('/users/add', function (req, res) {
    user.create(req,res)
  })
  app.get('/users/getall', function (req,res) {
    user.getAll(req,res)
  })
  app.get('/users/delete/:id', function (req,res) {
    user.delete(req,res)
  })
  app.post('/user/change', function (req,res) {
    user.change(req,res)
  })
}

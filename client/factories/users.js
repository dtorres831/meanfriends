app.factory('userFactory', function ($http, $location,$route) {
  var factory ={}
  factory.getAll = function (callback) {
    $http.get('/users/getall').then(function (output) {
      callback(output.data)
    })
  }
  factory.create = function (user) {
    console.log(user, 'in factory')
    $http.post('/users/add',user).then(function (output) {
      //to show what you inser log(outlook.data)
      console.log(output);
      $location.url('/users')
    })
  }
  factory.delete = function (id) {
    // console.log(id,'in fact');
    $http.get('users/delete/'+id).then(function () {
      $route.reload()
    })
  }
  factory.show = function (id) {
    $location.url('/show/'+ id)
  }
  factory.edit = function (id) {
    $location.url('/edit/'+ id)
  }
  factory.change = function (user) {
    $http.post('/user/change', user).then(function() {
      $location.url('/dash')
    })
  }
  return factory
})

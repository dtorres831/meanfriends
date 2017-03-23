app.controller('userController', function ($scope,userFactory,$routeParams) {
  if($routeParams.id){
    userFactory.getAll(function (data) {
      $scope.users = data
      for(user in $scope.users){
        if($scope.users[user]['_id']=== $routeParams.id){
          $scope.cur_user = $scope.users[user]
          console.log($scope.cur_user);
        }
      }
    })
  }else{
    userFactory.getAll(function (data) {
      $scope.users = data
    })
  }
  $scope.create = function () {
    userFactory.create($scope.newUser)
  }
  $scope.delete = function(id){
    // console.log(id);
    userFactory.delete(id)
  }
  $scope.show= function (id) {
    userFactory.show(id)
  }
  $scope.edit = function (id) {
    userFactory.edit(id)
  }
  $scope.change = function () {
    userFactory.change($scope.cur_user) 
  }
})

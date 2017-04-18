app.controller('newController', function($scope, $location, FriendFactory){
  console.log("new controller loaded!")

  $scope.create = function() {
    console.log("I clicked the button");
    console.log($scope.new_friend);

    FriendFactory.create($scope.new_friend, function(data) {
      if (data) {
        $location.url('/');
      } else {
        $scope.errormessage = "Cannot make friend."
      }
    })
  }
})

app.controller('editController', function($scope, FriendFactory, $routeParams){
  console.log("Edit controller loaded");
  console.log("this is the route param id:",$routeParams.id);
  FriendFactory.show($routeParams.id, function(data){
      console.log("data from friends factory:",data);
      if(!data){
        $scope.errormessage = "Could not find the friend in the database."
      }
      else {
        $scope.friend = data;
      }
    })
  $scope.update = function() {
    console.log('updated friend', $scope.friend);
    console.log("clicked edit button");
    FriendFactory.update($scope.friend, function (data) {
      console.log("this is the edit controller data: ", data);
    })
  };
});

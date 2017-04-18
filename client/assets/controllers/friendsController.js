app.controller('friendsController', function($scope, FriendFactory){
  console.log("Friends controller loaded");
  $scope.friends = []

  if (FriendFactory.messages) {
    $scope.message = FriendFactory.messages.pop();
  }
  $scope.index = function(){
    FriendFactory.index(function(data){
      console.log("Friend factory gave me data", data);
      if(!data){
        $scope.errormessage = "Could not find any friends in the database."
      }
      else {
        $scope.friends = data;
      }
    })
  }
  $scope.index();
})

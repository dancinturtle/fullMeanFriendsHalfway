
app.factory('FriendFactory', function($http){

  var factory = {};
  var friends = [];
  factory.messages = [];
  factory.index = function(callback){
    $http.get('/friends').then(function(data){
      console.log("Factory received data from db", data)
      if(data.data.message=="Success"){
        friends = data.data.friends;
        callback(friends);
      }
      else {
        callback(false)
      }
    })
  }

  factory.create = function(newfriend, callback) {
    $http.post('/friends', newfriend).then(function(data) {
      console.log("this is from the factory: ", data);
      if(data.data.message === "Success") {
        factory.messages.push(data.data.message);
        callback(true);
      } else {
        callback(false);
      }
    });
  }

  factory.show = function(id, callback){
    var found = false;
    for(f in friends){
      if (friends[f]._id === id){
        callback(friends[f])
        console.log("this is the friend:",friends[f]);
        found = true;
        break
      }
    }
    if (found == false){
      callback(false);
    }
  }

  return factory;


});


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
  factory.update = function(friend, callback) {
    $http.put('/friends/' + friend._id, friend).then(function(data) {
      console.log("This is the data we got in factory update", data);
      callback(data);
    })
  }
  return factory;


});

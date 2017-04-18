console.log("Friends controller");
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = {
  index: function(req, res){
    Friend.find({}, function(badStuff, goodStuff){
      if(badStuff){
        res.json({message: "Error", error: badStuff})
      }
      else{
        res.json({message: "Success", friends: goodStuff})
      }
    })
    // res.json({placeholder: {message: "Index!"}})
  },
  create: function(req, res){
    console.log('pls work');
    Friend.create(req.body, function(err, output){
      if (err) {
        res.json({message: "Error", error: err})
      }
      else {
        res.json({message: "Success", friend: output})
      }
    })
  },
  update: function(req, res){
    res.json({placeholder: {message: "Update!"}})
  },
  delete: function(req, res){
    res.json({placeholder: {message: "Delete!"}})
  },
  show: function(req, res){
    res.json({placeholder: 'show'});
  }
}

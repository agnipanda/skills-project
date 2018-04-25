var mongoose = require('mongoose');
var logModel = require('../model/login');
var signModel = require('../model/signup');
var bcrypt = require('bcrypt');

var logUser=function(req,res){
	var logmodel = new logModel({
		roomid:req.body.logid,
		password:req.body.logpass
	});
	logModel.statics.authenticate = function (roomid, password, callback) {
  	signModel.findOne({ roomid: logmodel.roomid })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, signModel.password, function (err, result) {
        if (result === true) {
          return callback(null, signModel);
        } else {
          return callback();
        }
      });
    });
	 /*signModel.findOne({"roomid":logmodel.roomid},"password",function(err,response){
	// 	var pw = logmodel.password;
	// 	var bool = bcrypt.compareSync(pw, res);
	//bcrypt.compareSync(myPlaintextPassword, hash);
	console.log(logmodel.password);
	console.log(response);
		if(logmodel.password==response){
			res.send("ok");
		}
		else{
			res.send("not ok");
		}
	});*/
};
};

module.exports = {"logUser":logUser};
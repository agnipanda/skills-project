var mongoose = require('mongoose');
var logModel = require('../model/login');

var logUser=function(req,res){
	var logmodel = new logModel({
		roomid:req.body.roomid,
		password:req.body.password
	});
	var pw = logmodel.password;
	var bool = bcrypt.compareSync(pw, hash);
};

module.exports = {"logUser":logUser};
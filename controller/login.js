var mongoose = require('mongoose');
var logModel = require('../model/login');
var signModel = require('../model/signup');
var bcrypt = require('bcrypt');

var logUser=function(req,res){
	var logmodel = new logModel({
		roomid:req.body.logid,
		password:req.body.logpass
	});
   	// var pw = logmodel.password;
	// var saltRounds = 10;
	// var hash = bcrypt.hashSync(pw, saltRounds);
	// logmodel.password = hash;
  	signModel.findOne({roomid:logmodel.roomid,password:logmodel.password},function(err,user){
  		if(err){
  			console.log(err);
  			return res.status(500).send();
  		}
  		if(!user){
  			return res.render('logsign',{msg:'Invalid credentials..!!'})
  		}
  		req.session.user=user;
  		return res.render('home');

  	});
  };
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

module.exports = {"logUser":logUser};
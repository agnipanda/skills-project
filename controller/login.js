var mongoose = require('mongoose');
var signModel = require('../model/signup');
var bcrypt = require('bcrypt');

var logUser=function(req,res){
 	// var pw = logmodel.password;
	// var saltRounds = 10;
	// var hash = bcrypt.hashSync(pw, saltRounds);
	// logmodel.password = hash;
  	signModel.findOne({regno:req.body.logid},function(err,user){
  		console.log("user="+user);
  		if(err) throw err;
	      if(user){
	        //bcrypt.compare(req.body.password,user.password,function(err,isMatch) {
	          if(err) throw err;
	          if(user.password==req.body.logpass){
	            var details = {
	              "name" : user.name,
	              "email" : user.email,
	              "phone" : user.phone,
	              "regno" : user.regno,
	              "gender" : user.gender
	            };
				req.session.user = details;
				console.log(req.session.user);
				res.redirect('/home');
  			  }
		  }
	});
};

module.exports = {"logUser":logUser};
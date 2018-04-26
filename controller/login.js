var mongoose = require('mongoose');
var signModel = require('../model/signup');

var logUser=function(req,res){
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
	              "gender" : user.gender,
	              "amount" : user.amount,
	            };
				req.session.user = details;
				console.log(req.session.user);
				return res.redirect('/home');
  			  }
  			  
  			  return res.redirect('/logsign');
		  }
	});
};

module.exports = {"logUser":logUser};
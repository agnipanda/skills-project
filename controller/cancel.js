var mongoose = require('mongoose');
var signModel = require('../model/signup');

var cancelAmount=function(req,res){
	var c=req.body;
	var bf=0,l=0,d=0;
	var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	var date = new Date();
	var curr_date = date.getDate();
	var curr_month = date.getMonth();
	var curr_year = date.getFullYear();
	var bs="ON",ls="ON",ds="ON";
	date2=curr_date + "-" + m_names[curr_month] + "-" + curr_year;
	if(c.breakfast){
		bf+=25;
		bs="OFF";
	}
	if(c.lunch){
		l+=25;
		ls="OFF";
	}
	if(c.dinner){
		d+=25;
		ds="OFF";
	}
	signModel.findOne({regno:req.session.user.regno},function(err,user){
		if(user.date == date2){
			req.session.mes="Already cancelled..!!"
			res.redirect('/home');
		}
		else{
			var cd="";
			if(user.cdates==" "){
				cd=date2;
			}
			else{
				cd=user.cdates+'/'+date2;
			}
			var t=(user.amount)-(bf+l+d);
			req.session.user.amount=t;
			conditions = {regno:req.session.user.regno},
			update = {$set : {amount:t,date:date2,cdates:cd}},
			options = {multi: true};
		  	signModel.findOneAndUpdate(conditions,update,options,callback);
		  	function callback (err, numAffected) {
		  		if(err){
		  			console.log(err);
		  		}
		  		else{
		  			console.log(numAffected);
		  			req.session.bs=bs;
					req.session.ls=ls;
					req.session.ds=ds;
		  			res.redirect('/home');
		  		}
			};
		}
	});
};
module.exports = {"cancelAmount":cancelAmount};
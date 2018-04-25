var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var signSchema = new Schema({
	name: {type:String,required:true},
	email: {type:String,required:true,unique:true},
	phone: {type:String,required:true,unique:true},
	regno: {type:String,required:true,unique:true},
	password: {type:String,required:true},
	gender: {type:String,required:true}
});
signSchema.plugin(uniqueValidator);
var signModel = mongoose.model('sign',signSchema);
module.exports = signModel;
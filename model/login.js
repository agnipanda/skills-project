var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
	logid: {type:String,required:true},
	logpass: {type:String,required:true}
});

var logModel = mongoose.model('login',logSchema);

module.exports = logModel;
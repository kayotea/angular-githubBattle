/*
 * User MODEL 
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create schema
var UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    profile: {type: String},
    score: {type: Number},
});

//register schema as model
var User = mongoose.model('User', UserSchema);

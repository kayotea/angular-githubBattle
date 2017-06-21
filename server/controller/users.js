/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {

    index: (req, res) => {
        User.find({}).sort({score: -1})
        .then(data => {
            console.log('success in users.js/index()');
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log('error in users.js/index()');
            res.json(err);
        })
    },

    createUser: (req, res) => {
        console.log('reached users.js/createUser() - user:', req.body);
        User.find({username: req.body.username})
        .then(data => {
            console.log("data:",data);
            if (data.length == 0){
                console.log('user not found in database, adding user');
                var user = new User(req.body);
                user.save(user)
                .then(data => {
                    console.log('success! added user');
                    res.json(data);
                })
                .catch(error => {
                    console.log('error adding user');
                    res.json(error);
                })
            } else {
                console.log('user found in database, user not added');
            }
        })
        .catch(error => {
            console.log('error finding user:', error)
        })
    },

    deleteUser: (req, res) => {
        console.log("deleteitem(): item is:",req.body);
        User.deleteOne(req.body.id)
        .then(data => {
            console.log('success in items.js/deleteItem()');
            res.json(data);
        })
        .catch(err => {
            console.log('error in items.js/deleteItem()');
            res.json(err);
        })
    }
}
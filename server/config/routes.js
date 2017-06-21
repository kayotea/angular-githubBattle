/*
 * VARIABLES
 */
var users = require('../controller/users.js'),
    path = require('path');

/*
 * ROUTES
 */
module.exports = function(app){
    
    app.post('/new_user', (req, res) => {
        console.log('reached routes.js/post new user - user:', req.body);
        users.createUser(req, res);
    });
    app.get('/users', (req, res) => {
        users.index(req, res);
    });
    app.post('/delete/user', (req, res) => {
        console.log('reached routes.js/app.delete()');
        users.deleteUser(req, res);
    })
    app.all("*", (req,res) => {
        res.sendfile(path.resolve("./public/dist/index.html"));
    });
}
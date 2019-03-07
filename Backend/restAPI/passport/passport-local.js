const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//REGISTRATION
passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
 (req, username, done) => { //pulls info from register.page.ts l
    User.findOne({'username' : username}, (err,user) => {
        if(err){
            return done(err)
        }

        if(user){
            return done(null, false ,'Username already exists');
        }

        if(req.body.password.length < 5){
            return done(null, false, 'Password must be longer than 4 characters');
        }

        const newUser = new User();
        newUser.username = req.body.username;
        newUser.password = newUser.encryptPassword(req.body.password);
        newUser.fullname = req.body.fullname;
        newUser.email = req.body.email;

        newUser.save((err) => {
            return done(null, newUser);
        })
    });
}));

//LOGIN
passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
 (req, username, password, done) => {
    User.findOne({'username' : username}, (err,user) => {
        if(err){
            return done(err)
        }

        if(!user){
            return done(null, false ,'Username does not exists');
        }

        if(password.length < 5){
            return done(null, false, 'Password too short to find')
        }

        if(!user.checkPassword(req.body.password)){
            return done(null, false, 'Password does not match Username');
        }

        return done(null, user);
    });
}));
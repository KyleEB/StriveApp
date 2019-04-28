/**
 * Creates User obj from REST route
 */
const User = require('../models/user');
/**
 * Creates passport obj from dependencies
 */
const passport = require('passport');
/**
 * Creates passport strategy for create user, login, and update cards
 */
const LocalStrategy = require('passport-local').Strategy;

/**
 * Uses passport to create signup method to create a user on DB
 * @returns A newly created User Obj
 */
passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
 (req, username, password, done) => { //pulls info from register.page.ts l
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
            return done(err, newUser);
        })
    });
}));

/**
 * Uses passport to login to the server from the Frontend
 * @returns A User Obj from the DB
 */
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

/**
 * Uses passport to change the password of the current user
 * @returns If the change was successful
 */
passport.use('local-password', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
 (req, username, password, done) => { //pulls info from register.page.ts 
    const newUser = new User();
    newUser.password = newUser.encryptPassword(req.body.password);
    User.findOneAndUpdate({'username' : username},
     {$set: {'password' : newUser.password } }, (err,user) => {
        if(err){
            return done(err)
        }

        if(req.body.password.length < 5){
            return done(null, false, 'Password must be longer than 4 characters');
        }

            return done(err, user);
        
    });
}));
/**
 * Uses passport to update the goals/cards of a User from the Frontend to the Server
 */
passport.use('local-cards', new LocalStrategy({
    usernameField: 'username',
    cardArray: 'cards',
    passReqToCallback: true
},
 (req, username, cards, done) => { 
    const newUser = new User();
    newUser.cards = req.body.cards;
    User.findOneAndUpdate({'username' : username},
     {$set: {'cards' : newUser.cards } }, (err,user) => {
        if(err){
            return done(err)
        }

            return done(err, user);
        
    });
}));

/**
 * Uses passport to update the goals/cards of a User from the Frontend to the Server
 */
passport.use('local-subscribe', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
 (req, username, subscribe, done) => { 
    const newUser = new User();
    newUser.subscribed = req.body.subscribed;
    User.findOneAndUpdate({'username' : username},
     {$set: {'subscribed' : newUser.subscribed } }, (err,user) => {
        if(err){
            return done(err)
        }
            return done(err, user);
    });
}));
/**
 * Instantiates passport for HTTP Posts
 */
const passport = require('passport');
/**
 * Creates User Obj using REST route
 */
const User = require('../models/user');

/**
 * Exports a create user method using post and response requests
 * @param req Request
 * @param res Response
 * @param next Passback to Frontend
 */
exports.createUser = (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        if(err){
            return res.status(200).json({error: err});
        }

        if(info){
            return res.status(200).json({error: info});
        }

        return res.status(201).json({message: 'User created!', user: user});

    })(req, res, next);
}
/**
 * Exports login function to Frontend 
 * @param req Request
 * @param res Response
 * @param next Passback to Frontend
 */
exports.loginUser = (req, res, next) => {
    
    passport.authenticate('local-login', (err, user, info) => {
        if(err){
            return res.status(200).json({error: err});
        }

        if(info){
            return res.status(200).json({error: info});
        }

        return res.status(201).json({message: 'User Login Successful!', user: user});

    })(req, res, next);
}
/**
 * Exports changing password function to Frontend 
 * @param req Request
 * @param res Response
 * @param next Passback to Frontend
 */
exports.changePassword = (req, res, next) =>{
    passport.authenticate('local-password', (err, user, info) => {
        if(err){
            return res.status(200).json({error: err});
        }

        if(info){
            return res.status(200).json({error: info});
        }

        return res.status(201).json({message: 'Password Change Successful!', user: user});

    })(req, res, next);
}
/**
 * Exports updating cards/goals function to Frontend 
 * @param req Request
 * @param res Response
 * @param next Passback to Frontend
 */
exports.updateCards = (req, res, next) =>{
    passport.authenticate('local-cards', (err, user, info) => {
        if(err){
            return res.status(200).json({error: err});
        }

        if(info){
            return res.status(200).json({error: info});
        }

        return res.status(201).json({message: 'Updated Cards!', user: user});

    })(req, res, next);
}

/**
 * Exports updating subscribed function to Frontend 
 * @param req Request
 * @param res Response
 * @param next Passback to Frontend
 */
exports.updateSubscribed = (req, res, next) =>{
    passport.authenticate('local-subscribe', (err, user, info) => {
        if(err){
            return res.status(200).json({error: err});
        }

        if(info){
            return res.status(200).json({error: info});
        }

        return res.status(201).json({message: 'Subscribed!', user: user});

    })(req, res, next);
}
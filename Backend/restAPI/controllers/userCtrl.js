const passport = require('passport');
const User = require('../models/user');

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
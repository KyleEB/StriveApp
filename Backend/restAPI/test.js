var assert = require('assert');
let server = require('../restAPI/server');
let User = require('../restAPI/models/user');
let bcrypt = require('bcrypt-nodejs');
let UserCtrl = require('../restAPI/controllers/userCtrl');

describe('Backend Testing Mocha', () => {
    describe('Print Out User Passwords', () => {
        it('Check every user has a password', () => {
            assert.toString(User.find("password"));
        });
    });

    describe('Check bcrypt Hashing', () => {
        it('Pass a word to hash and check if hashed', () => {
            let word = '12345';
            let hashWord = word;
            hashWord = bcrypt.hashSync(hashWord);
            assert.notEqual(word, hashWord);
        });
    });

    describe('User Database Functions', () => {
        let username = 'aaaa';
        let userpasswword = 'bbbb';
        it('Creates a User', () => {
            let newUser = new User();
            newUser.username = username;
            newUser.userpasswword = userpasswword;
            newUser.save();
        });

        it('Finds the User', () => {
            assert.ok(User.findOne({'username' : username}));
        });

        
        it('Removes the User', () => {
            assert.ok(User.findOneAndDelete({'username' : username}));
            assert.fail(User.findOne({'username': username}));
        });

    });
});

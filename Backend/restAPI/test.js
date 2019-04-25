var assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
let server = require('../restAPI/server');
let User = require('../restAPI/models/user');
let bcrypt = require('bcrypt-nodejs');
let UserCtrl = require('../restAPI/controllers/userCtrl');

describe('Backend Testing Mocha', () => {
    describe('Print Out User Passwords', () => {
        it('Check every user has a password', () => {
           assert(User.find('password'));
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
        let username = 'testName';
        let userpassword = 'testPassword';
        let newUser = new User();
        it('Creates a User and checks if name is correct', () => {
            newUser.username = username;
            newUser.userpassword = userpassword;
            newUser.save();
            assert.equal(newUser.username, username);
        });

        it('Finds and Deletes the User', () => {
            assert(User.findOneAndDelete({'username' : username}));
        });

    });
    server.close();
});

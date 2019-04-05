var assert = require('assert');
let server = require('../restAPI/server');
let User = require('../restAPI/models/user');
let bcrypt = require('bcrypt-nodejs');

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

    
});

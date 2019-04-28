/**
 * Instantiates Mongoose
 */
const mongoose = require('mongoose');
/**
 * Instantiates Bcrypt for enctryption
 */
const bcrypt = require('bcrypt-nodejs');
/**
 * Creates User schema for MongoDB Server
 */
const userSchema = mongoose.Schema({
    username: {type : String},// {type : Boolean}, to make fail case 
    password: {type : String},
    email: {type : String},
    fullname: {type : String},
    subscribed: {type : Boolean},
    cards: [{ name : String , goal : String, desc : String, achieve: String}]
});
/**
 * Encrypts User Password
 */
userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

/**
 * Uses bcrypt to lookup a user's password in 
 * the database to check if the given password was correct
 */
userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
/**
 * Exports the mongoose model to be used in server.js
 */
module.exports = mongoose.model('User', userSchema);


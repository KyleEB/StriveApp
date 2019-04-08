const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
    username: {type : String},
    password: {type : String},
    email: {type : String},
    fullname: {type : String},
    cards: [{ name : String , goal : String, desc : String}]
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);


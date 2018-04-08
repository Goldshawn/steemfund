'use strict';
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userID: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    unique: true
  },
  steemitUsername: {
    type: String,
    required: true,
    unique: true
  },
  created: Date
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken'});

module.exports = mongoose.model('User', UserSchema);

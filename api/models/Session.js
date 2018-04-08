'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  SessionID: {
    type: String,
    required: [true, "can't be blank"],
    unique: true
  },
  UserID: {
    type: String,
    required: [true, "can't be blank"]
  },
  TimeStamp: Date
});

module.exports = mongoose.model('Session', SessionSchema);

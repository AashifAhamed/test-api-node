const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 first_name: {
  type: String,
  required: true,
 },
 last_name: {
  type: String,
  required: true,
 },
 date: {
  type: Date,
  default: Date.now,
 }
});
module.exports = mongoose.model('Users', UserSchema)
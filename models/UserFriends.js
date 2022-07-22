const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserFriendSchema = new Schema({
 user_id: {
  type: String,
  required: true,
 },
 friend_user_id: {
  type: String,
  required: true,
 }
});
module.exports = mongoose.model('UserFriends', UserFriendSchema)
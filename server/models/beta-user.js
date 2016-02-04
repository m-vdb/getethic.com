var mongoose = require('mongoose');

var betaUserSchema = new mongoose.Schema({
  email: {type: String, index: {unique: true}},
  mailSent: {type: Boolean, default: false},
  created: {type: Date, default: Date.now}
}, {
  collection: 'beta_user'
});


module.exports = mongoose.model('BetaUser', betaUserSchema);

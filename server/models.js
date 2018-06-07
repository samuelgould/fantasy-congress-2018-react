'use strict';

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chamber: { type: String, required: true },
  state: { type: String, required: true },
  stateAbbr: { type: String, required: true },
  district: Number,
  party: { type: String, required: true },
  incumbent: { type: Boolean, required: true },
  image: String,
  twitterHandle: String,
  price: { type: Number, required: true }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  teamName: { type: String, required: true },
  teamSubmitted: { type: Boolean, default: false },
  senate: [{
    candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }
  }],
  house: [{
    candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }
  }],
  budget: { type: Number, default: 200 }
});

userSchema.methods.serialize = function() {
  return {
    username: this.username,
    email: this.email,
    _id: this._id,
    firstName: this.firstName || '',
    lastName: this.lastName || '',
    teamName: this.teamName,
    teamSubmitted: this.teamSubmitted,
    senate: this.senate,
    house: this.house,
    budget: this.budget
  };
};

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', userSchema);

module.exports = { Candidate, User };
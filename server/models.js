'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const candidateSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  chamber: { type: String, required: true },
  state: { type: String, required: true },
  district: Number,
  party: { type: String, required: true },
  incumbent: { type: Boolean, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  team: [{
    candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = { Candidate, User };
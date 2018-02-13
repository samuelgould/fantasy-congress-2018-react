'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');
const { User } = require('../models');

mongoose.connect(DATABASE_URL)
  .then(function () {
    return User.create([
      {username: 'sammy',
        teamName: 'Joe Biden my time...',
        firstName: 'Sam',
        lastName: 'Gould',
        email: 'sam.gould.dev@gmail.com',
        senate: [{candidate_id:'5a833c500aac3d497af74dfa'}],
        house: [{candidate_id:'5a833c500aac3d497af74df8'}, {candidate_id:'5a833c500aac3d497af74df7'}]
      }
    ]).then(result => console.log(result))
      .catch(err => {
        console.log(err);
      });
  });
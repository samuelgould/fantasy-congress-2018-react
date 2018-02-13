'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');
const { User } = require('../models');

mongoose.connect(DATABASE_URL)
  .then(function () {
    return User.create([
      {username: 'sammy',
        firstName: 'Sam',
        lastName: 'Gould',
        email: 'sam.gould.dev@gmail.com',
        senate: [],
        house: []
      }
    ]).then(result => console.log(result))
      .catch(err => {
        console.log(err);
      });
  });
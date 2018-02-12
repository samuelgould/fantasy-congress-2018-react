'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');
const { Candidate } = require('../models');

mongoose.connect(DATABASE_URL)
  .then(function () {
    mongoose.connection.db.dropDatabase();

    return Candidate.create([
      {'firstName': 'Paul',
        'lastName': 'Ryan',
        'chamber': 'House',
        'state': 'Wisconsin',
        'district': '1',
        'party': 'R',
        'image': 'https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Paul_Ryan.jpg',
        'incumbent': true},
    
      {'firstName': 'Randy',
        'lastName': 'Bryce',
        'chamber': 'House',
        'state': 'Wisconsin',
        'district': '1',
        'party': 'D',
        'image': 'https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Randy_bryce_0.jpg',
        'incumbent': false},
            
      {'firstName': 'Mark',
        'lastName': 'Pocan',
        'chamber': 'House',
        'state': 'Wisconsin',
        'district': '2',
        'party': 'D',
        'image': 'https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Pocan_mark.jpg',
        'incumbent': true},
        
      {'firstName': 'Tammy',
        'lastName': 'Baldwin',
        'chamber': 'Senate',
        'state': 'Wisconsin',
        'party': 'D',
        'image': 'https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Tammy_Baldwin.jpeg',
        'incumbent': true}
    ]).then(result => console.log(result))
      .catch(err => {
        console.log(err);
      });
  });
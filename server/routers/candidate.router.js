'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const list = [
    {'id': '0001',
      'firstName': 'Paul',
      'lastName': 'Ryan',
      'chamber': 'House',
      'state': 'Wisconsin',
      'district': '1',
      'party': 'R',
      'incumbent': 'incumbent'},

    {'id': '0002',
      'firstName': 'Randy',
      'lastName': 'Bryce',
      'chamber': 'House',
      'state': 'Wisconsin',
      'district': '1',
      'party': 'D',
      'incumbent': 'challenger'},
		
    {'id': '0003',
      'firstName': 'Mark',
      'lastName': 'Pocan',
      'chamber': 'House',
      'state': 'Wisconsin',
      'district': '2',
      'party': 'D',
      'incumbent': 'incumbent'},
	
    {'id': '0004',
      'firstName': 'Tammy',
      'lastName': 'Baldwin',
      'chamber': 'Senate',
      'state': 'Wisconsin',
      'district': '',
      'party': 'D',
      'incumbent': 'incumbent'}
  ];
  res.json(list);
});

module.exports = router;
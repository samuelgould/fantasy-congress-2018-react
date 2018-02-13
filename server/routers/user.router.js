'use strict';

const express = require('express');

const { User } = require('../models');

const router = express.Router();

// GET a specific user's information

router.get('/:id', (req, res) => {
  User
    .findById(req.params.id)
    .populate('house.candidate_id')
    .populate('senate.candidate_id')
    .then(user => res.json(user))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

module.exports = router;
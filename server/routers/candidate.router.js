'use strict';

const express = require('express');

const { Candidate } = require('../models');

const router = express.Router();

// GET all the candidates

router.get('/', (req, res) => {
  Candidate
    .find()
    .then(candidates => res.json(candidates))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

// GET a specific candidate

router.get('/:id', (req, res) => {
  Candidate
    .findById(req.params.id)
    .then(candidate => res.json(candidate))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

module.exports = router;
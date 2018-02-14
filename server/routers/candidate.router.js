'use strict';

const express = require('express');
const passport = require('passport');

const { Candidate } = require('../models');
const { localStrategy, jwtStrategy } = require('../strategies');

const router = express.Router();

passport.use(localStrategy);
passport.use(jwtStrategy);

const jwtAuth = passport.authenticate('jwt', { session: false });

// GET all the candidates

router.get('/', jwtAuth, (req, res) => {
  Candidate
    .find()
    .then(candidates => res.json(candidates))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

// GET a specific candidate

router.get('/:id', jwtAuth, (req, res) => {
  Candidate
    .findById(req.params.id)
    .then(candidate => res.json(candidate))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

module.exports = router;
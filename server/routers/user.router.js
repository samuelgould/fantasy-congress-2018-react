'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('../models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.post('/', jsonParser, (req, res) => {
  const requiredFields = ['username', 'password', 'email', 'teamName'];
  const missingField = requiredFields.find(field => !(field in req.body));

  if (missingField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Missing field',
      location: missingField
    });
  }

  const stringFields = ['username', 'password', 'email', 'firstName', 'lastName', 'teamName'];
  const nonStringField = stringFields.find(
    field => field in req.body && typeof req.body[field] !== 'string'
  );

  if (nonStringField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Incorrect field type: expected string',
      location: nonStringField
    });
  }

  const explicityTrimmedFields = ['username', 'password', 'email'];
  const nonTrimmedField = explicityTrimmedFields.find(
    field => req.body[field].trim() !== req.body[field]
  );

  if (nonTrimmedField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Cannot start or end with whitespace',
      location: nonTrimmedField
    });
  }

  const sizedFields = {
    username: {
      min: 3
    },
    password: {
      min: 10,
      max: 72
    },
    teamName: {
      min: 1,
      max: 30
    }
  };
  const tooSmallField = Object.keys(sizedFields).find(
    field =>
      'min' in sizedFields[field] &&
            req.body[field].length < sizedFields[field].min
  );
  const tooLargeField = Object.keys(sizedFields).find(
    field =>
      'max' in sizedFields[field] &&
            req.body[field].length > sizedFields[field].max
  );

  if (tooSmallField || tooLargeField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: tooSmallField
        ? `Must be at least ${sizedFields[tooSmallField]
          .min} characters long`
        : `Must be at most ${sizedFields[tooLargeField]
          .max} characters long`,
      location: tooSmallField || tooLargeField
    });
  }

  let {username, password, email, teamName, firstName = '', lastName = '', house = [], senate = []} = req.body;

  firstName = firstName.trim();
  lastName = lastName.trim();

  return User.find({username})
    .count()
    .then(count => {
      if (count > 0) {

        return Promise.reject({
          code: 422,
          reason: 'ValidationError',
          message: 'Username already taken',
          location: 'username'
        });
      }
      
      return User.hashPassword(password);
    })
    .then(hash => {
      return User.create({
        username,
        password: hash,
        email,
        firstName,
        lastName,
        teamName,
        house,
        senate
      });
    })
    .then(user => {
      return res.status(201).json(user.serialize());
    })
    .catch(err => {

      if (err.reason === 'ValidationError') {
        return res.status(err.code).json(err);
      }
      res.status(500).json({code: 500, message: 'Internal server error'});
    });
});

// GET a specific user's information

router.get('/:id', (req, res) => {
  User
    .findById(req.params.id)
    .populate('house.candidate_id')
    .populate('senate.candidate_id')
    .then(user => res.json(user.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

router.put('/:user_id/house/:candidate_id', (req, res) => {
  User
    .findByIdAndUpdate(
      req.params.user_id,
      {
        $push: {
          house: {
            candidate_id: req.params.candidate_id
          }
        }
      },
      { new: true }
    ).populate('house.candidate_id')
    .populate('senate.candidate_id')
    .then(user => res.status(201).json(user.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json( { message: 'Something went wrong' } );
    });
});

router.put('/:user_id/senate/:candidate_id', (req, res) => {
  User
    .findByIdAndUpdate(
      req.params.user_id,
      {
        $push: {
          senate: {
            candidate_id: req.params.candidate_id
          }
        }
      },
      { new: true }
    ).populate('house.candidate_id')
    .populate('senate.candidate_id')
    .then(user => res.status(201).json(user.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json( { message: 'Something went wrong' } );
    });
});

router.delete('/:user_id/house/:member_id', (req, res) => {
  User
    .findByIdAndUpdate(
      req.params.user_id, 
      { 
        $pull: { 
          'house': { 
            '_id': req.params.member_id 
          } 
        } 
      }, 
      { new: true })
    .then(() => {
      return res.status(204).end();
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

router.delete('/:user_id/senate/:member_id', (req, res) => {
  User
    .findByIdAndUpdate(
      req.params.user_id, 
      { 
        $pull: { 
          'senate': { 
            '_id': req.params.member_id 
          } 
        } 
      }, 
      { new: true })
    .then(() => {
      return res.status(204).end();
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

module.exports = router;
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
    .then(results => res.status(201).json(results))
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
    .then(results => res.status(201).json(results))
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
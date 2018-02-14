'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
const candidateRouter = require('./routers/candidate.router');
const userRouter = require('./routers/user.router');
const authRouter = require('./routers/auth.router');
const { localStrategy, jwtStrategy } = require('./strategies');

const app = express();

app.use(morgan('common'));

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/main.html');
});

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/candidates', candidateRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

const jwtAuth = passport.authenticate('jwt', { session: false });

// TESTING FUNCITONALITY OF JWTAUTH
app.get('/protected', jwtAuth, (req, res) => {
  return res.json({
    data: 'rosebud'
  });
});

app.use('*', (req, res) => {
  return res.status(404).json({ message: 'Not Found' });
});
// END OF TESTING -- REMOVE FROM FINAL BUILD

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
const candidateRouter = require('./routers/candidate.router');
const userRouter = require('./routers/user.router');
const authRouter = require('./routers/auth.router');

const app = express();

app.use(morgan('common'));

// app.use(
//   cors({
//     origin: CLIENT_ORIGIN
//   })
// );

app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/main.html');
});

app.use('/candidates', candidateRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

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
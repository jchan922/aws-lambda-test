require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// middleware
const { checkToken } = require('./_middleware/auth');

// routes
const { routes: loginRoutes } = require('./login/routes');
const { routes: userRoutes } = require('./user/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/login', loginRoutes);
app.use(checkToken);
app.use('/user', userRoutes);

app.listen(3000);

module.exports = app;
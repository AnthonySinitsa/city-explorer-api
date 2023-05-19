'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const getWeather = require('./modules/weather.js');
const getMovies = require('./modules/movie.js');
const app = express();
app.use(cors());

app.get('/weather', getWeather);
app.get('/movies', getMovies);

app.listen(process.env.PORT, () => console.log(`Server up on ${process.env.PORT}`));
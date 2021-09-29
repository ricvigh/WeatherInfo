const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('WeatherInfo');
})

app.listen(3000);
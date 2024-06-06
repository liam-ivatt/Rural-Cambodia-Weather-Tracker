const express = require("express")

// Express app
const app = express();

// Assigning port
const port = 8080;

//Serving static CSS files when res.render is called
app.use('/public', express.static('public'));

// Register view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

// Render index page
app.get('/', (req, res) => {
    res.render('index/index')
});

// Render charities page
app.get('/charities', (req, res) => {
    res.render('charities/charities')
});

// Define weather file for temperature tracking
const weatherFile = require('./views/weather/weather.json')

// Render weather page
app.get('/weather', (req, res) => {
    res.render('weather/weather', weatherFile)
});
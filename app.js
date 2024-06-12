const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
var submitFile = fs.readFileSync("./data.json")
var submitObject = JSON.parse(submitFile)

// Express app
const app = express();
app.use(express.json())

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

// Render weather page
app.get('/weather', (req, res) => {
    res.render('weather/weather')
});

app.post("/submit",(req,res)=>{
    // add to 
    const phoneObject = {
        phoneNum:(req.body.phoneNum),
    }
        submitObject["data"].push(phoneObject)
        fs.writeFile("data.json", JSON.stringify(submitObject), () => {})
        })

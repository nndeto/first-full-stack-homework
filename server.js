//this is my server it is the routes and middleware


//Dependencies
const express = require('express');
const rowdy = require('rowdy-logger')
//helps with methods and overriding them in forms for actions
const methodOverride = require('method-override');

//Databases & Models -->NEED TO DO
// const fruitsController = require('./controllers/fruitsController.js');

// Variables
const app = express();
const port = 4000;
const rowdyResults = rowdy.begin(app);

// Middleware
app.set('view engine', 'ejs'); //allows ejs to be used

//Uses
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
//for pulling our routes from our controller later --> NEED TO DO
// app.use('/routeName', controllerName)


//Start the Server
app.listen(port, () => {
    console.log("Hello")
    rowdyResults.print()
});
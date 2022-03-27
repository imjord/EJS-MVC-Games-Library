const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
// routes
const homeRoute = require('./routes/homeRoute');
const libraryRoute = require('./routes/LibraryRoute');
const catagoryRoute = require('./routes/catagoryRoute');
const trendingRoute = require('./routes/trendingRoute');


app.use('/catagories', catagoryRoute);
app.use('/', homeRoute);
app.use('/trending', trendingRoute);
app.use('/library', libraryRoute);


// set view engine 
app.set('view engine', "ejs");
app.use(express.static('./public'));

// heroku



app.listen(PORT, () =>{
    console.log(`server now live on ${PORT}`)
})


// db.once('open', () => {
//     console.log('database live')
//     app.listen(PORT, () =>{
//         console.log(`server now live ${PORT}`)
//     })
// })

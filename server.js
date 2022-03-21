const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection');
require('dotenv').config();


// routes
const homeRoute = require('./routes/homeRoute');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set view engine 
app.set('view engine', "ejs");
app.use(express.static('./public'));

app.use('/', homeRoute);


db.once('open', () => {
    console.log('database live')
    app.listen(PORT, () =>{
        console.log(`server now live ${PORT}`)
    })
})

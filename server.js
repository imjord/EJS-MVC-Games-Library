const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set view engine 
app.set('view engine', "ejs");


app.get('/', (req,res) =>{
    res.render('home', {title: 'Homepage'})
})


db.once('open', () => {
    console.log('database live')
    app.listen(PORT, () =>{
        console.log(`server now live ${PORT}`)
    })
})

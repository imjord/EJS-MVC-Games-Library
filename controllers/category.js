const fetch = require('node-fetch');
require('dotenv').config();



const Categories = {


    // get genre 
     getGenre(req,res){
    

        const response =  fetch("https://api.igdb.com/v4/genres", {
            method: "POST",
            headers: {
                'Client-ID': process.env.clientid,
                'Authorization': 'Bearer ' + process.env.auth
    
            },
            body: 'fields *;'
        }).then(response => response.json())
        .then(data => {
     
          res.render('catagories', {title: 'catagories', category: data})
        })
        .catch(err => console.log(err.message))
    
       
    },
    getMusic(req,res) {
        const response =  fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                'Client-ID': process.env.clientid,
                'Authorization': 'Bearer ' + process.env.auth
    
            },
            body: 'fields name, cover.url; where genres = (7);'
        }).then(response => response.json())
        .then(data => {
          
          res.render('gamesList', {title: 'Music', genreName: 'Music Games', games: data})
        })
        .catch(err => console.log(err.message))
    
    
    },

    getFighting(req,res) {
        const response =  fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                'Client-ID': process.env.clientid,
                'Authorization': 'Bearer ' + process.env.auth
    
            },
            body: 'fields name, cover.*; where genres = (4);'
        }).then(response => response.json()).then(data => {
        
          res.render('gamesList', {title: 'Fighting', genreName: 'Fighting Games', games: data})
        })
        .catch(err => console.log(err.message))
    
    
    },
    
     getPlatform (req,res) {
        const response =   fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                'Client-ID': process.env.clientid,
                'Authorization': 'Bearer ' + process.env.auth
    
            },
            body: 'fields name, cover.*; where genres = (8);'
        }).then(response => response.json()).then(data => {
          
          res.render('gamesList', {title: 'Platform', genreName: 'Platform Games', games: data})
        })
        .catch(err => console.log(err.message))
    
    
    },
    getPuzzle (req,res)  {
        const response =  fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                'Client-ID': process.env.clientid,
                'Authorization': 'Bearer ' + process.env.auth
    
            },
            body: 'fields name, cover.*; where genres = (9);'
        }).then(response => response.json()).then(data => {
          
          res.render('gamesList', {title: 'Puzzle', genreName: 'Puzzle Games', games: data})
        })
        .catch(err => console.log(err.message))
    
    
    },
    
    getRacing  (req,res)  {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': process.env.clientid,
            'Authorization': 'Bearer ' + process.env.auth

        },
        body: 'fields name, cover.*; where genres = (10);'
    }).then(response => response.json()).then(data => {
      
      res.render('gamesList', {title: 'Racing', genreName: 'Racing Games', games: data})
    })
    .catch(err => console.log(err.message))


},
getRpg (req,res) {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': process.env.clientid,
            'Authorization': 'Bearer ' + process.env.auth

        },
        body: 'fields name, cover.*; where genres = (12);'
    }).then(response => response.json()).then(data => {
      
      res.render('gamesList', {title: 'Rpg', genreName: 'Rpg Games', games: data})
    })
    .catch(err => console.log(err.message))


},

getRts(req,res)  {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': process.env.clientid,
            'Authorization': 'Bearer ' + process.env.auth

        },
        body: 'fields name, cover.*; where genres = (11);'
    }).then(response => response.json()).then(data => {
    
      res.render('gamesList', {title: 'Real-Time-Stradegy', genreName: 'Real-Time-Stradegy Games', games: data})
    })
    .catch(err => console.log(err.message))


},
 getShooter (req,res) {
    const response =   fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': process.env.clientid,
            'Authorization': 'Bearer ' + process.env.auth

        },
        body: 'fields name, cover.*; where genres = (5);'
    }).then(response => response.json()).then(data => {
      
      res.render('gamesList', {title: 'Shooter', genreName: 'Shooter Games', games: data})
    })
    .catch(err => console.log(err.message))

},
getSim  (req,res)  {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': process.env.clientid,
            'Authorization': 'Bearer ' + process.env.auth

        },
        body: 'fields name, cover.*; where genres = (13);'
    }).then(response => response.json()).then(data => {
      
      res.render('gamesList', {title: 'Simulator', genreName: 'Simulator Games', games: data})
    })
    .catch(err => console.log(err.message))


},
getSport (req,res)  {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': process.env.clientid,
            'Authorization': 'Bearer ' + process.env.auth

        },
        body: 'fields name, cover.*; where genres = (14);'
    }).then(response => response.json()).then(data => {
      
      res.render('gamesList', {title: 'Sport', genreName: 'Sport Games', games: data})
    })
    .catch(err => console.log(err.message))


},


    


}









module.exports = Categories;
const fetch = require('node-fetch');

const Trending = {


    getTrending(req,res){

        const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': process.env.clientid,
            'Authorization': 'Bearer ' + process.env.auth

        },
        body: 'fields name, rating, cover.url; where rating > 90 & cover != null; limit 50;'
    }).then(response => response.json()).then(data => {
        console.log(data)
        res.render('trending', {title: 'trending', data: data})    

        }).catch(err => {
            
                console.log(err.message)
            
        })



    }


}


module.exports = Trending;
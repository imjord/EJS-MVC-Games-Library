const { json } = require('express/lib/response');
const fetch = require('node-fetch');

const getPuzzle = (req,res) => {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields genres.name, name, cover.url; where genres = (9);'
    }).then(response => response.json())
    .then(data => {
        var datas = JSON.stringify(data)
      console.log(JSON.stringify(datas))
      res.render('puzzle', {title: 'puzzle', games: datas})
    })
    .catch(err => console.log(err.message))


}


// once click on a catagory make it go to a new route that posts that category games
module.exports = {getPuzzle};
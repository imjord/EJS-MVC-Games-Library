const fetch = require('node-fetch');

const getRacing = (req,res) => {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields genres; where genres = (10);'
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      res.render('racing', {title: 'racing', games: data})
    })
    .catch(err => console.log(err.message))


}

// once click on a catagory make it go to a new route that posts that category games
module.exports = {getRacing};
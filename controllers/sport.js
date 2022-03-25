const fetch = require('node-fetch');



const getSport = (req,res) => {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields genres.name, name, cover.url; where genres = (14);'
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      res.render('sport', {title: 'sport', games: data})
    })
    .catch(err => console.log(err.message))


}


module.exports = {getSport};
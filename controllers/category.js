const fetch = require('node-fetch');

const getGenre =  (req,res) => {
    

    const response =  fetch("https://api.igdb.com/v4/genres", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields *;'
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      res.render('catagories', {title: 'catagories', categorys: data})
    })
    .catch(err => console.log(err.message))

   
}

module.exports = {getGenre}
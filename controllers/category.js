const fetch = require('node-fetch');



const Categories = {


    // get genre 
     getGenre(req,res){
    

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
          res.render('catagories', {title: 'catagories', category: data})
        })
        .catch(err => console.log(err.message))
    
       
    },
    getMusic(req,res) {
        const response =  fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
                'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"
    
            },
            body: 'fields name, cover.*; where genres = (7);'
        }).then(response => response.json())
        .then(data => {
          console.log(data)
          res.render('fighting', {title: 'fighting', games: data})
        })
        .catch(err => console.log(err.message))
    
    
    },

    getFighting(req,res) {
        const response =  fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
                'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"
    
            },
            body: 'fields name, cover.*; where genres = (4);'
        }).then(response => response.json()).then(data => {
          console.log(data)
          res.render('fighting', {title: 'fighting', games: data})
        })
        .catch(err => console.log(err.message))
    
    
    },
    
     getPlatform (req,res) {
        const response =   fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
                'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"
    
            },
            body: 'fields name, cover.*; where genres = (8);'
        }).then(response => response.json()).then(data => {
          console.log(data)
          res.render('platform', {title: 'platform', games: data})
        })
        .catch(err => console.log(err.message))
    
    
    },
    getPuzzle (req,res)  {
        const response =  fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
                'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"
    
            },
            body: 'fields name, cover.*; where genres = (9);'
        }).then(response => response.json()).then(data => {
          console.log(data)
          res.render('puzzle', {title: 'puzzle', games: data})
        })
        .catch(err => console.log(err.message))
    
    
    },
    
    getRacing  (req,res)  {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields name, cover.*; where genres = (10);'
    }).then(response => response.json()).then(data => {
      console.log(data)
      res.render('racing', {title: 'racing', games: data})
    })
    .catch(err => console.log(err.message))


},
getRpg (req,res) {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields name, cover.*; where genres = (12);'
    }).then(response => response.json()).then(data => {
      console.log(data)
      res.render('rpg', {title: 'role-playing', games: data})
    })
    .catch(err => console.log(err.message))


},

getRts(req,res)  {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields name, cover.*; where genres = (11);'
    }).then(response => response.json()).then(data => {
      console.log(data)
      res.render('rts', {title: 'rts', games: data})
    })
    .catch(err => console.log(err.message))


},
getShooter (req,res) {
    const response =   fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields name, cover.*; where genres = (5);'
    }).then(response => response.json()).then(data => {
      console.log(data)
      res.render('shooter', {title: 'shooter', games: data})
    })
    .catch(err => console.log(err.message))


},
getSim  (req,res)  {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields name, cover.*; where genres = (13);'
    }).then(response => response.json()).then(data => {
      console.log(data)
      res.render('simulator', {title: 'simulator', games: data})
    })
    .catch(err => console.log(err.message))


},
getSport (req,res)  {
    const response =  fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            'Client-ID': "dt0iidovqqqnrmznzpb0splfdunfzz",
            'Authorization': 'Bearer ' + "fu12c9uy63hfhecv1h5ghtzo7lb6gr"

        },
        body: 'fields name, cover.*; where genres = (14);'
    }).then(response => response.json()).then(data => {
      console.log(data)
      res.render('sport', {title: 'sport', games: data})
    })
    .catch(err => console.log(err.message))


},


    


}









module.exports = Categories;
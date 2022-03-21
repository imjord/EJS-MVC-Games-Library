const router = require('express').Router();



router.get('/', (req,res) =>{
    res.render('library', {title: 'Library'})
})





module.exports = router;
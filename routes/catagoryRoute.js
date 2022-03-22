const router = require('express').Router();
const {
    getGenre
} = require('../controllers/category');


router.get('/', getGenre);



module.exports = router;
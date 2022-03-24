const router = require('express').Router();
const {
    getGenre
} = require('../controllers/category');


router.get('/', getGenre);
router.get('/fighting', {});
router.get('/shooter', {});
router.get('/platform', {});
router.get('/puzzle', {});
router.get('/racing', {});
router.get('/role-playing-rpg', {});
router.get('/simulator', {});
router.get('/sport', {});





module.exports = router;
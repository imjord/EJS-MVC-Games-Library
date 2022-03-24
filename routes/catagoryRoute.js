const router = require('express').Router();
const {
    getGenre
} = require('../controllers/category');


const {
    getSim
} = require('../controllers/simulator');

const {
    getMusic
} = require('../controllers/music');

const {
    getFighting
} = require('../controllers/fighting');
const {
    getPuzzle
} = require('../controllers/puzzle');

const {
    getPlatform
} = require('../controllers/platform');

const {
    getShooter
} = require('../controllers/shooter');

const {
    getRacing
} = require('../controllers/racing');

const {
    getRpg
} = require('../controllers/rpg');
const { getSport } = require('../controllers/sport');
const { getRts } = require('../controllers/rts');


router.get('/', getGenre);
router.get('/fighting', getFighting);
router.get('/shooter', getShooter);
router.get('/platform', getPlatform);
router.get('/puzzle', getPuzzle);
router.get('/racing', getRacing);
router.get('/role-playing-rpg', getRpg);
router.get('/simulator', getSim);
router.get('/sport', getSport);
router.get('/music', getMusic);
router.get('/rts', getRts)




module.exports = router;
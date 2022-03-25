const router = require('express').Router();
const {
    getGenre, getFighting,
    getMusic,
    getPlatform, getPuzzle, getRacing, getRpg, getSport, getRts, getSim, getShooter
} = require('../controllers/category');





router.route('/').get(getGenre);
router.route('/fighting').get(getFighting);
router.route('/shooter').get(getShooter);
router.route('/platform').get(getPlatform);
router.route('/puzzle').get(getPuzzle);
router.route('/racing').get(getRacing);
router.route('/role-playing').get(getRpg);
router.route('/simulator').get(getSim);
router.route('/sport').get(getSport);
router.route('/music').get(getMusic);
router.route('/real').get(getRts)




module.exports = router;
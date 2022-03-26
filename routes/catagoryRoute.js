const router = require('express').Router();
const {
    getGenre,getMusic, getFighting,
    
    getPlatform, getPuzzle, getRacing, getRpg, getSport, getRts, getSim, getShooter
} = require('../controllers/category');





router.route('/').get(getGenre);
router.route('/shooter').get(getShooter);
router.route('/fighting').get(getFighting);

router.route('/platform').get(getPlatform);
router.route('/puzzle').get(getPuzzle);
router.route('/racing').get(getRacing);
router.route('/role-playing').get(getRpg);
router.route('/simulator').get(getSim);
router.route('/sport').get(getSport);
router.route('/music').get(getMusic);
router.route('/real').get(getRts)




module.exports = router;
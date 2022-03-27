const { getTrending } = require('../controllers/trending');

const router = require('express').Router();



router.route('/').get(getTrending);



module.exports = router;
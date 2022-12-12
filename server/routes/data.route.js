const express = require('express');
const DataCtrl = require('../controllers/data.controller');
const router = express.Router();

router.route('/info').post(DataCtrl.info);



module.exports = router;
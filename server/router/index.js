const router = require('express').Router();

const items = require('./items');

router.use(items);

module.exports = router;

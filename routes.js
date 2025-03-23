const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/test', controller.test);
router.get('/card_details/:card_number', controller.card_details);
router.post('/create_card', controller.create_card);
router.post('/buy_milk', controller.buy_milk);

module.exports = router;
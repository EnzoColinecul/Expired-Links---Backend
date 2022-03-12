const { Router } = require('express');
const { check } = require('express-validator');
const { linkPost, linkGet } = require('../controllers/link.controller');

const router = Router();

router.post('/link', [
  check('information', 'The field information is empty').trim().not().isEmpty(),
  check('time', 'Invalid Time').isIn(['minutes', 'hours', 'day', 'week']),
], linkPost);

router.get('/link/:url', linkGet);

module.exports = router;

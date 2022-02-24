const { Router } = require('express');
const { linkPost, linkGet } = require('../controllers/link.controller');

const router = Router();

router.post('/link', linkPost)
  .get('/link/:url', linkGet);

module.exports = router;

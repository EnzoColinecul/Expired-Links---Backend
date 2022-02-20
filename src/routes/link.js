const { Router } = require('express');
const { linkPost } = require('../controllers/link.controller');

const router = Router();

router.post('/generate', linkPost);

module.exports = router;

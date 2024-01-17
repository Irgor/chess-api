const express = require('express');
const chessService = require('../services/chess.service');
const router = express.Router();

router.post('/move', chessService.check);

module.exports = router
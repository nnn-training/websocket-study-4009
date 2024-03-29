'use strict';
const express = require('express');
const router = express.Router();
const os = require('node:os');

router.get('/', (req, res, next) => {
  res.json({ loadavg: os.loadavg() });
});

module.exports = router;
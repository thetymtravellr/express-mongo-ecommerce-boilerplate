const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    console.log('GET /2');
    res.sendFile(path.join(__dirname,'..','views','index.html'));
})

module.exports = router
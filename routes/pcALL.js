const express = require('express');
const router = express.Router();

//adding new page
router.get('/', (req,res) => {
res.send('hello this is page 2');
})

module.exports = router;
const express = require('express');
const router = express.Router();

//adding new page
router.get('/', (req,res) => {
res.render('pcALL');
})

module.exports = router;
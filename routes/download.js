const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.download('./public/alex-marcell-resume.pdf')
})

module.exports = router;
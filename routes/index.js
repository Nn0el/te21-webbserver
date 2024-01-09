const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.render('index.njk', { title: 'Greatest burritos in this galaxy!' })
})

router.get("/meny", function (req, res) {
  res.render('meny.njk', { title: 'Welcome to the greatest burrito menu!!!' })
})

module.exports = router
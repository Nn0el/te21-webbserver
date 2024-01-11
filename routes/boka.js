const express = require('express')
const router = express.Router()


router.get('/', function (req, res) {
  res.render('card.njk', { title: 'Boka bord' })
})

router.post('/', function (req, res) {
  console.log(req)
 
  res.render('card.njk', {
    title: 'Boka bord',
    name: req.body.name,
    greeting: req.body.greeting,
  })
})

module.exports = router
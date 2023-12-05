const express = require("express")
const router = express.Router()
const indexRouter = require("./routes/index")

app.use("/", indexRouter)
router.get("/", function (req, res) {
  res.render('index.njk', { title: 'Hello from template' })
})

module.exports = router
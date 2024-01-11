const express = require("express")
const res = require("express/lib/response")
const app = express();
const indexRouter = require('./routes/index')
const port = process.env.PORT || 3000
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')
const xmasRouter = require('./routes/boka')



nunjucks.configure
    ('views', {
        autoescape: true,
        express: app
    });
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
app.use(express.static('public'))
app.use((req, res, next) => {
    res.locals.url = req.originalUrl
    next()
})
app.use('/xmas', bokaRouter)
app.use('/', indexRouter)







app.listen(port, () => {
    console.log(`server running on port
    ${port}`)
})


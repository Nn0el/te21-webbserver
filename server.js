const express = require("express")
const res = require("express/lib/response")
const app = express();
const indexRouter = require('./routes/index')
const port = process.env.PORT || 3000
const nunjucks = require('nunjucks');

nunjucks.configure
    ('views', {
        autoescape: true,
        express: app
    });

app.use(express.static('public'))
app.use((req, res, next) => {
    res.locals.url = req.originalUrl
    next()
})

app.use('/', indexRouter)







app.listen(port, () => {
    console.log(`server running on port
    ${port}`)
})


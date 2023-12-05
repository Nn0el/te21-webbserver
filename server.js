const express = require("express")
const res = require("express/lib/response")
const app = express();
const port = process.env.PORT || 3000
const nunjucks = require('nunjucks');
 
nunjucks.configure
('views', {
    autoescape: true,
    express: app
});


app.use(express.static('public'))

app.get("/TRE", (req, res) => {
    res.send("Hejsan svejsan")
})
app.get("/", (req, res) => {
    res.render('index.njk', {title: 'Hello from template'})
})



app.listen(port,()=> {
    console.log(`server running on port
    ${port}`)
})


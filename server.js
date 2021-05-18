const express = require('express')
const mongoose = require('mongoose')
const Articles = require('./models/article')

const methodOverride=require('method-override')

const articleRouter=require('./routes/articles')
try {
    mongoose.connect('mongodb://localhost/blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}
catch (err) {
    console.log("Error occured while connecting to mongo client")
    console.log(err);
}
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended:false
}))

app.use(methodOverride('_method'))
app.use('/articles', articleRouter)
app.get('/', async (req, res) => {
    const articles = await Articles.find().sort({ createdAt: 'desc' })
    res.render('index',{articles:articles})
})


const port=600
app.listen(port, () => {
    console.log(`hurray the server is started on the port ${port}, log on to it by http://localhost:${port}`)
})


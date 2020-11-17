const app = require('express')()
const layouts = require('express-ejs-layouts')
const dinoRouter = require('./controllers/dinoController')

// require stuff

app.set('view engine', 'ejs')
app.use(layouts)

// our routes
app.get('/', (req, res) => {
    res.send('hello I am alive!')
})

app.use('/dinosaurs', dinoRouter)


// listen!
app.listen(8000, () => {
    console.log('server started!');
})
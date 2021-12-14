const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors');
const app = express()

const appRouter = require('./router')
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/', appRouter);


mongoose.connect('mongodb://localhost:27017/product', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('bazaga ulandi');
    })
    .catch((err) => {
        console.log(err);
    })


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`${port} - port ishga tushdi`)
})
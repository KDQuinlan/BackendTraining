const dotenv = require('dotenv')
dotenv.config();

const express = require('express')
const mongoose = require('mongoose');
import chainData from './schemas'

const app = express()
const port = 3000

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        console.log('Mongo DB Connected')
    )

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chainCollection', async (req, res) => {
    try {
        const chainData = await chainData.find()
    } catch (e) {
        console.log(e)
    }

    console.log(chainData)
    res.send(chainData)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


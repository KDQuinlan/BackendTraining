const dotenv = require('dotenv')
dotenv.config();

import express from 'express'
import mongoose from 'mongoose'

import ChainData from './models/chainSchema'

const app = express()
const port = 4000

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        console.log('Mongo DB Connected')
    )

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chainCollection', async (req, res) => {
    let chainData
    try {
        chainData = await ChainData.find({})
    } catch (e) {
        console.log(e)
    }

    console.log(chainData)
    res.send(chainData)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


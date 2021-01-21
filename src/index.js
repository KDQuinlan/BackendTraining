const dotenv = require('dotenv')
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

import ChainData from './models/chainSchema';
import RegionData from './models/regionSchema';
import StoreData from './models/storeSchema';

const app = express()
const port = 4000

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        console.log('Mongo DB Connected')
    )

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/chainCollection', async (req, res) => {
    let chainData
    try {
        chainData = await ChainData.find()
    } catch (e) {
        console.log(e)
    }

    res.send(chainData)
})

app.get('/regionCollection', async (req, res) => {
    let regionData
    try {
        regionData = await RegionData.find()
    } catch (e) {
        console.log(e)
    }

    console.log(regionData)
    res.send(regionData)
})

app.get('/storeCollection', async (req, res) => {
    let storeData
    try {
        storeData = await StoreData.find()
    } catch (e) {
        console.log(e)
    }

    console.log(storeData)
    res.send(storeData)
})


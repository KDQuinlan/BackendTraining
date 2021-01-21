import { model, Schema } from 'mongoose';

const regionSchema = new Schema({
    storeArray: [
        {
            storeId: Number,
            storeName: String,
            today: Number,
            lastYear: Number,
            lastYearDay: Number
        }
    ],
    areaArray: [
        {
            id: Number,
            name: String,
            today: Number,
            lastYear: Number,
            lastYearDay: Number,
            divisionArray: [
                {
                    id: Number,
                    name: String,
                    today: Number,
                    lastYear: Number,
                    lastYearDay: Number
                }
            ]
        }
    ]
}, { collection: 'regionCollection' })

export default model('RegionData', regionSchema)
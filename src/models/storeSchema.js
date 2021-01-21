import { model, Schema } from 'mongoose';

const storeSchema = new Schema({
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
}, { collection: 'storeCollection' })

export default model('StoreData', storeSchema)


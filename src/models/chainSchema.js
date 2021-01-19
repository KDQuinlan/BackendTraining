import { model, Schema } from 'mongoose';

 const chainSchema = new Schema({
    regionArray: [
        {
            regionId: Number,
            regionName: String,
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
})

export default model('ChainData', chainSchema)


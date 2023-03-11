import mongoose from "mongoose";

export const soldierSchema = new mongoose.Schema({
    _id: Number,
    classiffication: String,
    unit: String,
    ids: {
        name: String,
        rank: String,
        birth: Date,
        profile: Number,
        tel: String,
    },
    bonuses: [
        {
            number: Number,
            date: Date
        }
    ],
    gmushim: [
        {
            name: String,
            percentages: Number, 
            startDate: Date
        }
    ],
    courses: [
        {
            name: String,
            date: Date,
            hours: Number
        }
    ],
    doch1: {
        date: Date,
        status: {
            type: String,
            default: "טרם הוזן"
        }
    }

})


export default mongoose.model('Soldier', soldierSchema);
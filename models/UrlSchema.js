const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema(
    {
        mainUrl: {
            type: String,
            required: true
        },
        shortUrl: {
            type: String,
            required: true
        },
        isAuth: {
            type: Boolean,
            default: false
        },
        visitedHistory: [
            {
                clicked: {
                    type: Date
                }
            }
        ]
    },
    {
        timestamps: true 
    }
)

module.exports = mongoose.model('Urls', urlSchema);

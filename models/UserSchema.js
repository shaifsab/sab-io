const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        userUrls: {
            ref: "Urls",
            type: [Schema.Types.ObjectId]
        }
    }
)

module.exports = mongoose.model("Users", userSchema)
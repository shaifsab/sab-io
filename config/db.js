const mongoose = require('mongoose')
require('dotenv').config()

const db = async () => {
    try {
        // const dbUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`
        const dbUrl = process.env.MONGO_URL
        
        await mongoose.connect(dbUrl)
        console.log('database connected')
   
    } catch (error) {
        console.error('database connected failed')
        process.exit(1)
    }
}

module.exports = db
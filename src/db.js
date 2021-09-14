const mongoose = require("mongoose");
const config = require("./config");


const connectDB = async () => {
    try {
        const db = await mongoose.connect(config.MONGO_URI,{useNewUrlParser:true, 
            useUnifiedTopology:true,})
        console.log(`mongodb connected`);
        return db;
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

module.exports = connectDB;
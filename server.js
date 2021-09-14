const express = require("express");
const connectDB = require("./src/db");
const config = require("./src/config");
const app = express();


//middleware
const authRoutes = require('./src/routes/auth');

app.use(express.json());

app.use('/api', authRoutes);






const startServer = async () => {
    await connectDB();
    app.listen(config.PORT, (err) => {
        if (err) {
            console.log(err);
            process.exit(1)
        }
    
        console.log (`server started`);
    })


}

startServer()
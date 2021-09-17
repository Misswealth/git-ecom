const express = require("express");
const connectDB = require("./src/db");
const config = require("./src/config");
const app = express();


//routes
const authRoutes = require('./src/routes/auth');
const adminRoutes = require('./src/routes/admin/auth');
const categoryRoutes = require('./src/routes/category');
const productRoutes = require('./src/routes/product');

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);






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
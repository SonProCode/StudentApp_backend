const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv')
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const studentRouter = require("./routes/StudentRoutes");
app.use("/", studentRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

module.exports = app;

const mongoose = require("mongoose");
dotenv.config();
const queryString = process.env.MONGODB_URI || "mongodb+srv://gddra121:Son04072000@mycluster.tv1rt.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster";

//configure mongoose
mongoose.connect(queryString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'));
mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error:', err.message);
})
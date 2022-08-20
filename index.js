const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).
then(()=>console.log("DB connection successfull."))
.catch((err)=>console.log(err));

app.get("/api/test", ()=>{
    console.log("test is successfull")
});

app.use("/api/user", userRoute);

app.listen(process.env.MONGODB_PORT || 5000, () => {
    console.log("Backend server is running!");
  });
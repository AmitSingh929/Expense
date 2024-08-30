const mongoose = require("mongoose");

const db  = async function(){
    try{
        mongoose.set("strictQuery",false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Successfully Connected");
    }
    catch(error){
        console.log(error);
    }
};

module.exports = db;

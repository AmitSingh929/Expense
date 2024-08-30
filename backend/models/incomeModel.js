const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        trim : true, // Remove whitespace from start and end
        maxLength : 50
    },
    amount : {
        type : Number,
        required : true,
        trim : true,
        maxLength : 20
    },
    type :{
        type : String,
        default: "Income"
    },
    date : {
        type : Date,
        required : true,
        trim : true
    },
    category :{
        type: String,
        // default : "Others"
    },
    description :{
        type : String,
        required : true,
        trim: true,
        maxLength : 20

    }
},
{timestamps: true});// Record the timeStamps for data creation, Deletion and Update

module.exports = mongoose.model("Income", IncomeSchema);
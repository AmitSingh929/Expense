const incomeSchema = require('../models/incomeModel');

const addIncome = async function(req, res){
    const {title,amount, category, description,date} = req.body;
    const newIncome = new incomeSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        // Validations
        if(!title || !amount || !category || !description || !date)
            return res.status(400).json({message: "All fields are required"});
        
        else if(amount <= 0 || !amount === "number")
            return res.status(400).json({message : "Amount should be a Number > 0"});

        await newIncome.save();
        res.status(200).json({message : "Income Added"});
        
    } catch (error) {
        res.status(500).json({message : error.message});
    }
    console.log(newIncome);
};

const getIncomes = async function(req, res){
    try {
        const incomes = await incomeSchema.find().sort({createdAt: -1}); // Latest add income will be at top
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json("Can't get all Incomes");
    }
};

const deleteIncome = async function(req,res){
    const {id} = req.params;
    console.log(req.params);
    try {
        const income = await incomeSchema.findByIdAndDelete(id);
        res.status(200).json({message : "Income Deleted"});
    } 
    catch (error) {
        res.status(500).json({message : error.message});
    }

};

module.exports = {addIncome,getIncomes,deleteIncome};
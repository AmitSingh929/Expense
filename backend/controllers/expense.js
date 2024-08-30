const expenseSchema = require('../models/expenseModel');

const addExpense = async function(req, res){
    const {title,amount, category, description,date} = req.body;
    const type = "expense";
    const newExpense = new expenseSchema({
        title,
        amount,
        category,
        description,
        date,
        type
    });

    try {
        // Validations
        if(!title || !amount || !category || !description || !date)
            return res.status(400).json({message: "All fields are required"});
        
        else if(amount <= 0 || !amount === "number")
            return res.status(400).json({message : "Amount should be a Number > 0"});

        await newExpense.save();
        res.status(200).json({message : "Expense Added"});
        
    } catch (error) {
        res.status(500).json({message : error.message});
    }
    console.log(newExpense);
};

const getExpenses = async function(req, res){
    try {
        const incomes = await expenseSchema.find().sort({createdAt: -1}); // Latest add income will be at top
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json("Can't get all Expenses");
    }
};

const deleteExpense = async function(req,res){
    const {id} = req.params;
    console.log(req.params);
    try {
        const income = await expenseSchema.findByIdAndDelete(id);
        res.status(200).json({message : "Expense Deleted"});
    } 
    catch (error) {
        res.status(500).json({message : error.message});
    }

};

module.exports = {addExpense,getExpenses,deleteExpense};
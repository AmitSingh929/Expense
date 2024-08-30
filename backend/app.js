const  dotenv = require('dotenv');
const  express = require('express');
const  cors = require('cors');
const  db = require('./db/db.js');
const  {readdirSync} = require('fs');


dotenv.config(); // Load environment variables from .env
const PORT = process.env.PORT;
const app = new express();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/",function(req, res){
    res.send("Hello World");
});

// Routers
// readdirSync - Synchronous method which reads contents of a directory
// Read the contents of routes directory
// Map -> Iterates over the files name in th directory
// For each file loads the corresponding jS module
// Mount the loaded module as a middleware function at the /api/v1 path

readdirSync('./routes').map(function(route){
    app.use('/api/v1',require('./routes/' + route));
});


app.listen(PORT,function(){
    console.log("Server Running on Port " + PORT);
});
db(); // Connect database
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');  
const app = express();

//  Middlewares 
app.use(express.json());
app.use(cors());
app.use("/books",router) // localhost:5001/books

mongoose.connect("mongodb+srv://admin:dLw1gorPxBn4KN1G@cluster0.nx8mj.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(() => console.log("Connected to MongoDB"))
.then(() =>{
        app.listen(5001, () => console.log("Server is running on port 5001"));
    }).catch((err)=> console.log(err));


    
const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/ToDoRoute');

const app = express();
const port = 5500;

app.use(express.json());


mongoose.connect('mongodb+srv://yamini:yamini@cluster0.typrnx7.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Database connected !!!');
}).catch(err => console.log(err.message));


app.use(route);

app.listen(port, () => console.log(`running on port : ${port}`));

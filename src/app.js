const morgan = require('morgan');
const express = require('express');
const toDos = require('./routes/todo.route');
const TodoModel = require('./models/todos.route');
const dbConnection = require('./utils/connection');


const app = express();
const PORT = 8000;

TodoModel;
dbConnection.authenticate()
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(morgan());
app.use(express.json());
app.use(toDos)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
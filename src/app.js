const express = require('express');
const morgan = require('morgan');


const app = express();
const PORT = 8000;

app.use(morgan());
app.use(express.json());



app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
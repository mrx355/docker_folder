const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req,res) =>{
    res.send('Yoshaaaa!! Vegito Blue!!');
});

app.listen(PORT, () =>{
    console.log(`Connected to port ${PORT}`);
});
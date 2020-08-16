const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send({ 'hi': 'there',
'fuck': 'you' });
});

// use environment var PORT, or local 5000 (if dev)
const PORT = process.env.PORT || 5000;

app.listen(PORT);
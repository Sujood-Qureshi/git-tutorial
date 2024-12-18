const express = require('express');

const app = express();

app.use('/', (req, res)=>{
    res.send("Hello World!, changes made on another-branch");
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})
const express = require('express');

const app = express();

app.use('/', (req, res)=>{
    res.send("Hello World!, making change to the remote branch...");
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})
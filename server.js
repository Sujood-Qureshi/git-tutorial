const express = require('express');

const app = express();

app.use('/', (req, res)=>{
    res.send("Hello World!, this change was made using github editor...");
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})

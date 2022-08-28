const express = require('express');

const app = express();
const {PORT=3000} = process.env;

console.log("port",PORT);

app.get("/",(req,res)=>{
res.send("Hello Bright Tech Bits");
})

app.listen(PORT,()=>{
    console.log("Example app listening at port"+ PORT);
})

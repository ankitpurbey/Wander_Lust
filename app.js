const express = require("express");
const app = express();
const mongoose = require("mongoose")

main()
.then
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WANDER_LUST');
  }

app.get("/",(req,res)=>{
    res.send("i m ankit");
});
app.listen(8080,()=>{
    console.log("listening to port 8080");
});
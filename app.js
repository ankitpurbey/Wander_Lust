const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("../models/listing.js")

main()
.then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WANDER_LUST');
  }

app.get("/",(req,res)=>{
    res.send("i m ankit");
});
app.get("/testListing",async (req,res)=>{
    let samplelisting = new Listing({
        title : "my new villa ",
        description: "This villa is near by the beach",
        price:3000,
        location:" goa",
    })
    await samplelisting.save();
    console.log("Sample was saved");
    res.send("successfull testing");
});
app.listen(8080,()=>{
    console.log("listening to port 8080");
});
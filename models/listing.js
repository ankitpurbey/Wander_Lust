const mongoose = require("mongoose");
const Schema  =mongoose.Schema;

const ListingSchema = new Schema({
    title:{
       type: String,
       required:true,
    },
    description: String,
    price:{
        typr:Number,
        required:true,
    },
    image: {
        type:String,
        set:(v)=> v ===""? "default link":v,
    location: {
        type:String,
        required:true,
    },
    Country:String,

});

const Listing =mongoose.model("Listing",ListingSchema);
modules.export =Listing;
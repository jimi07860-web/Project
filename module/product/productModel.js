import mongoose from "mongoose"

const productSchema= new mongoose.Schema({
   product_id:
   {
    type:String,
    required:true,
    index:true,
    unique:true
   },
   name:
   {
    type:String,
    unique:true,
    index:true
   },
   slug:
   {
    type:String,
    unique:true,
    index:true,
   },
   description:
   {
    type:String,
    trim:true
   },
   category:
   {
    type:String,
    unique:true,
    index:true
   },
   price:
   {
    type:Number,
    min:0
   }
},{timestamps:true})

export default mongoose.model("product", productSchema)

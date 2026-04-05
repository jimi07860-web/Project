import mongoose from "mongoose"

const schema= new mongoose.Schema({
    order_id:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    insertedOn:{
        type:String,
        required:true,    
    }
})
schema.index({order_id:1, email:1}, {unique:true})
const oredrModel= mongoose.model("order", schema)
export default oredrModel;
import mongoose from "mongoose";

const schema= new mongoose.Schema({
     product_id:{
        type:Number,
        required:true,
    },
    order_id:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        default:0,
    }
})
schema.index({product_id:1, order_id:1}, {unique:true})
const oredrItemsModel= mongoose.model("orderItems", schema)

export default oredrItemsModel
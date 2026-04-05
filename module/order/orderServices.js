import mongoose from "mongoose";
import { getOrder, getOrderItem, sendOrder, sendOrderItems} from "./orderRepository.js";

export const sendOrderService= async(payload) => {
let hash= {}
let hashtemp= {}
 let orderdata= [];
 let orderItemdata= [];
 let ordercond= ""
 let orderitemcond= ""
/*
const filtterData= payload.flatMap((row) => {
    let validRecords= []
    let product= row.products
    
    for(let i=0; i < product.length; i++)
    {
       let key= `${row.email}|${row.order_id}|${product[i].product_id}`
        if(!hash.hasOwnProperty(key))
        {
        //console.log("product", i, product[i]);
        hash[key]= 1
        validRecords.push({...row, product_id: product[i].product_id})
        }
    }   
    return validRecords 
})
console.log("filter value", filtterData)
//
let cond= "";
cond= filtterData.map((row) => {
    console.log("row is", row)
    return cond
})
*/
for(let i= 0; i < payload.length; i++)
{
    let row= payload[i]
    let product= row.products
    for(let j=0; j < product.length; j++)
    {
        let key= `${row.email}|${row.order_id}|${product[j].product_id}`
        if(!hash.hasOwnProperty(key))
        {
        hash[key]= 1
        if(!hashtemp.hasOwnProperty(row.product_id|row.order_id))
        {
            hashtemp[row.email|row.order_id]= 1
            orderdata.push({order_id:row.order_id, email:row.email, insertedOn:row.insertedOn})
        }  
        orderItemdata.push({order_id:row.order_id, product_id: product[j].product_id, quantity:product[j].quantity})
        }
    }
}
 
console.log("validate records", orderdata, orderItemdata)
let data= []
const session= await mongoose.startSession();
try
{
session.startTransaction()
const sendorder= await sendOrder(orderdata, session)
const sendorderItems= await sendOrderItems(orderItemdata, session)
await session.commitTransaction()
}
catch(e)
{
    await session.abortTransaction();
    throw e
}
finally
{ 
    await session.endSession()
}

return {}
}
import oredrModel from "./orderModel.js";
import oredrItemsModel from "./orderItemsModel.js";


export const getOrderData= (payload= {}) => {
console.log("payload", payload)
//return oredrModel.find(payload)
return oredrModel.aggregate([
    {
    $match:payload
    },
    {
    $lookup:
        {
        from:"orderItems",
        localField:"order_id",
        foreignField:"order_id",
        as:"product"
        }
    }
    ])
}


export const getOrder= (payload) => {
return oredrModel.find(payload)
}
export const getOrderItem= (payload) => {
return oredrItemsModel.find(payload)
}

export const sendOrder= (payload, session) => {

    return oredrModel.insertMany(payload, {session});
}

export const sendOrderItems= (payload, session) => {
    return oredrItemsModel.insertMany(payload), {session};
}
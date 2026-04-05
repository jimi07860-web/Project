import {sendOrderService} from "./orderServices.js"
import asyncHandler from "../../utils/lib/asyncHandler.js"

export const orderSendController= asyncHandler(async(req, res) => {
const order= await sendOrderService(req.body)
console.log("router called");
res.status(200).json({ message:"order placed", data:order, sucess:"ok" })
})

import { inserProductService } from "./product.service.js";
import asyncHandler from "../../utils/lib/asyncHandler.js";

export const insertProductRecord= asyncHandler(async (req,res) => {
const insertedData= await inserProductService(req.body)
res.status(200).json({message:"records inserted", status:"ok", success:true, data:insertedData})
})
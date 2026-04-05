import asyncHandler from "../../utils/lib/asyncHandler.js";
import getData from "./dashboard.service.js"

const FatchData= asyncHandler(async(req, res) => {
const data= await getData();
console.log("data is", data)
res.status(200).json({message:"recieved data", status:"ok", data:data})
})

export default FatchData
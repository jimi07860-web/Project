import asyncHandler from "../../utils/lib/asyncHandler.js"
import { signupService, loginService, insertRecords } from "./authServices.js";
import {authArrayObject, authSchema} from "./authSchema.js";
//
export const signupController= asyncHandler(async (req, res) => {
    const payload= authSchema.parse(req.body)
    //console.log("payload", payload);
    if(!payload)
        throw new Error("invalid credential")
    const user= await signupService(payload);
    if(!user)
        throw new Error("user login failed")
    res.status(201).json({
        message : "user created successfuly", status : "ok", data : user})
})

export const loginController= asyncHandler( async (req, res) => {
    const payload= authSchema.parse(req.body)
    console.log("payload", payload);
    if(!payload)
        throw new Error("invalid credential")
    const {user, token}= await loginService(payload)
    if(!user)
        throw new Error("invalid user")
    if(!token)
        throw new Error("invalid token")
    res.cookie("user", token, 
        {
        maxAge: 900000, // 15 minutes
        httpOnly: true,
        secure: true
        })
    res.status(200).json({message:"logged in", status:"ok", data:user})
})

export const insertController= asyncHandler(async (req, res) => 
{
const users= authArrayObject.safeParse(req.body)
//console.log("users", users);
if(!users.success)
    {
    let errormsg= users.error.issues.map((err) => err.message)
    //console.log("err", errormsg)
    throw new Error(errormsg.join(" , "))
    }
const {sucess, failed}= await insertRecords(users);
res.status(200).json({ message:"Records inserted", data:{sucess, failed}, status:"ok" })
})

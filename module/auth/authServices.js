import { getUser, createUser, insertManyUser, getUserbyCond } from "./authRepository.js"
import { createPwd, comparePwd } from "../../utils/bcrypt/createPwd.js"
import { createToken } from "../../utils/tokens/genrateToken.js"
//
export const signupService= async (payload) => 
    {
    const user= await getUser(payload)
    //console.log("user", user)
    if(user && user.length != 0)
        throw new Error("user already exists")
    const {email, password}= payload
    const hash= await createPwd(password)
    const response= await createUser({email, password:hash})
    return response
    }

export const loginService= async(payload) => 
    {
        const user= await getUser(payload)
        const hash= user[0].password
        const plainPassword= payload.password
        //
        if(!user || user.length == 0)
            throw new Error("user not exists")
        const pwdcompare= await comparePwd(plainPassword, hash)
        if(! pwdcompare)
            throw new Error("invalid user");
        const token= createToken({user:payload.user})
        if(!token)
            throw new Error("token not genrated, try to login again")
        return {user, token};        
    }

export const insertRecords= async(payload) => {
    const {sucess, error}= ""
    const chunkSize= 10
    //
    //console.log("payload", payload.data)
    const emails= payload.data.map((row) => { return row.email})
    //console.log("email", emails)
    //
    const existuser= await getUserbyCond({
        $or:[{email:{$in:emails}}]
    })
    const existEmail= new Set(existuser.map((ulist) => { return ulist.email}))
    //
    //console.log("existing user", existEmail)
    const users= payload.data.filter((u) => {return ! existEmail.has(u.email)})
    //console.log("userssss", users)
    //
    for(let i= 0; i < users.length; i+= chunkSize)
    {
     const user= users.slice(i, chunkSize)
     //console.log("user", user)
     const respnse= await insertManyUser(user)  
    }
    //
    //console.log("payload", payload);
    return {sucess, error}

}
import jwtToken from "jsonwebtoken"

export const createToken= (payload) => 
   {
    return jwtToken.sign(payload, process.env.SECREAT_KEY, {expiresIn: "15h"})
   }

export const refreshToken= (payload) => 
    {
    return jwtToken.sign(payload, process.env.SECREAT_KEY, {expiresIn: "1h"})
    }

export const jwtverify= (token) => 
    {
    return jwtToken.verify(token, process.env.SECREAT_KEY)
    }
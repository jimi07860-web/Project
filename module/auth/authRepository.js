import { userModel } from "./authModel.js";

export const getUser= (payload) => {
    const {email, paaword}= payload
    return userModel.find({email})
}

export const getUserbyCond= (cond= {}) => {
return userModel.find(cond)
}

export const createUser= (payload) => {
return userModel.create(payload)
}

export const insertManyUser= (payload) => {
    return userModel.insertMany(payload)
}

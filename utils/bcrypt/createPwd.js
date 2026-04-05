import bcrypt from "bcrypt"

export const createPwd= (password) => {
    return bcrypt.hash(password, 10)   
}

export const comparePwd= (plainPassword, hash) => {
    console.log("passsss", plainPassword, hash)
    return bcrypt.compare(plainPassword, hash)
}
import productModel from "./productModel.js"

export const productFind= (cond= {}) => {
    return productModel.find(cond)
}

export const productBulkInsert= (payload) => {
return productModel.bulkWrite(payload)
}
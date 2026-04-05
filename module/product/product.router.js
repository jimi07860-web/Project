import express from "express"
import { insertProductRecord } from "./product.controller.js";

const productRouter= express.Router()

productRouter.post("/insertProductList", insertProductRecord);

export default productRouter
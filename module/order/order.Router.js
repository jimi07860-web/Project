import {Router} from "express"
import {orderSendController} from "./orderController.js"

const orderRouter= Router()
orderRouter.post("/sendOrder", orderSendController)

export default orderRouter;
import express, { json } from "express"
import cors from "cors"
import authRouter from "./module/auth/authRouter.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleWare/errorMiddleware.js"
import productRouter from "./module/product/product.router.js"
import orderRouter from "./module/order/order.Router.js";
import dashboardRouter from "./module/dashboardData/dashboard.router.js";

const app= express();
app.use(json()) 
app.use(cors())
app.use(cookieParser())

app.use("/auth", authRouter)
app.use("/product", productRouter)
app.use("/order", orderRouter)
app.use("/dashboard", dashboardRouter)
app.use(errorMiddleware)

export default app
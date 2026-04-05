import mongoose from "mongoose"
import logs from "../logs/appdlog.js"
let dbconnected= false

const dbcon= async() => 
    {
    if(dbconnected)
        {
        logs.info("db is connected")
        return mongoose.connection
        }
    try
    {
    let response= await mongoose.connect(process.env.URL,
        {
        dbName:process.env.DB,
        maxPoolSize:10,
        serverSelectionTimeoutMS:5000,
        socketTimeoutMS:45000
        });
    logs.info("db is connecting...")
    dbconnected= response.connections[0].readyState === 1
    }
    catch(e)
    {
        logs.error(`db is not connected:${e.message}`) 
         process.exit(1)
    }
    return mongoose.connection
}
export default dbcon;
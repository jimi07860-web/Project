import app from "./app.js";
import dotenv from "dotenv"
import dbcon from "./utils/db/dbcon.js";
import logs from "./utils/logs/appdlog.js";
//
dotenv.config()
const PORT= process.env.PORT || 3000
const server= async() => 
{
try
{
const connection= await dbcon()
if(connection)
    {
    logs.info(`connection is ${connection}`)
    app.listen(PORT, () => { logs.info(`server is running on port:${PORT}`)});
    }
else
    logs.error("db connection issue")
}
catch(e)
{
    logs.error(`error is:${e}`)
    // terminate node js application so use when very crtical task fails like DB or server connections
    process.exit(1)
}
}
server()
export default server
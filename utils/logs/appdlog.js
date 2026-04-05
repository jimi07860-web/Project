import winston from "winston";

const {errors, combine, json, timestamp }= winston.format

const logs= winston.createLogger({
    level:"info",
    format:combine(json(), timestamp(), errors({stack:true})),
    transports:[
        new winston.transports.File({
            filename:"./utils/logs/log.txt",
            level:"info"
        }),
        new winston.transports.File({
            filename:"./utils/logs/error.txt",
            level:"error"
        }),
        new winston.transports.Console()
    ]
})

export default logs;
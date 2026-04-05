
const errormiddleWare= (error, req, res, next) => 
{
const statusCode= error.statusCode || 404
const message= error.message || "internal server error"
return res.status(statusCode).json({success:false, message: message})
}

export default errormiddleWare
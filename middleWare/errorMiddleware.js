const errorMiddleware= (err, req, res, next) => {
res.status(501).json({message:err.message, status:"not ok", success:false})
}

export default errorMiddleware
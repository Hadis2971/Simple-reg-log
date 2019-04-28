const errorHandler = (error, req, res, next) => {
    res.status(500).json({Error: error});
};

export default errorHandler;
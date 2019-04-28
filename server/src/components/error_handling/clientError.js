const errorHandler = (req, res, next) => {
    res.status(500).send(`<h1>Error 404 - Page Not Found</h1>`);
};

export default errorHandler;
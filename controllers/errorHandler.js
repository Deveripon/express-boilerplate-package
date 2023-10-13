//404 error handler
export const _404errorHandler = (req, res) => {
    res.status(404).json({
        status: 404,
        message: "404 NOT FOUND",
    });
};

export const _appErrorHandler = (err, req, res, next) => {
    if (err.message) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    } else {
        res.status(500).json({
            status: 500,
            message: "There was an server side error. Please try again",
        });
    }
};

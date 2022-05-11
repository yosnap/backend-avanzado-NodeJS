const createError = require('http-errors');

function NotFoundMiddleware (req, res, next) {
    next(createError(404));
}

function ErrorMiddleware(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
}

module.exports = {
    ErrorMiddleware,
    NotFoundMiddleware
};
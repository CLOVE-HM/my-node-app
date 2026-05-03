export const middlewareA = (req, res, next) => {
    console.log('Middleware A: Before next()');
    next();
    console.log('Middleware A: After next()');
}

export const middlewareB = (req, res, next) => {
    console.log('Middleware B: Before next()');
    next();
    console.log('Middleware B: After next()');
}

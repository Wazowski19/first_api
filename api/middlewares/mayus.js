const logger = (req, res, next) => {
    console.log(new Date(), 'Nueva petición con body:', req.body);
    next();   
}

export {
    logger
}
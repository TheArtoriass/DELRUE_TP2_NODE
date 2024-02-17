const validate = require('jsonschema').validate

function validateSchemaMiddleware(schema){
    return (req, res, next) => {
        item = req.body;
        const dataValid = validate(item, schema);
        if(dataValid.errors.length == 0){
            return next();
        } else{
            return res.status(400).send(dataValid.errors);
        }
    }
}

module.exports = {
    validateSchemaMiddleware
}
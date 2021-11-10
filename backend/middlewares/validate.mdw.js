const Ajv = require("ajv").default;

module.exports = function(schema){
    return function(req,res,next){
    
        const ajv = new Ajv() 
        const validate = ajv.compile(schema)
    
        const valid = validate(req.body)
        if (!valid) {
            return res.status(400).json(validate.errors);
        }
        next();
    }
} 
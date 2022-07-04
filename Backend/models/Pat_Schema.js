const schema_mongoose = require('mongoose');

const PatSchema = schema_mongoose.Schema(
    {
        regname:{type:String},
        regnumber:{type:String},
        reggender:{type:String},
        regrpv:{type:String},
        regemail:{type:String},
        regage:{type:String},
        regdescription:{type:String},
        regdatetime: { type: Date, default: Date.now }
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('Pat_schema_collection', PatSchema)
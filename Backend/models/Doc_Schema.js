const schema_mongoose = require('mongoose');

const DocSchema = schema_mongoose.Schema(
    {
        Doctorname:{type:String},
        DoctorMs:{type:String},
        DoctorExperience:{type:String},
        DoctorAge:{type:String},
        DoctorGender:{type:String},
        DoctorEmail:{type:String},
        DoctorDegree:{type:String},
        DoctorTs:{type:String},
        Doctorpass:{type:String},
        regdatetime: { type: Date, default: Date.now }
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('Doc_schema_collection', DocSchema)
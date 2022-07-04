const express = require('express');



const router = express.Router();



const PatModel = require('../models/Pat_Schema');



const mailservice = require('../servies/registrationseries');


router.post('/RegPat',(req,res) =>

{
    const Patobj=new PatModel ({
        regname:req.body.regname,
        regnumber:req.body.regnumber,
        reggender:req.body.reggender,
        regrpv:req.body.regrpv,
        regemail:req.body.regemail,
        regage:req.body.regage,
        regdescription:req.body.regdescription
    });
    Patobj.save()
    .then(inserteddocument2 => {
      mailservice.sendmail(req.body.regemail, 'APPOINTMENT SUCCESSFUL BOOKED', 'THANK YOU FOR BOOKING APPOINTMENT' +inserteddocument2); 
 res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument2);
          })//CLOSE THEN
    .catch(err =>{
 res.status(500).send({ message: err.message || 'Error in Employee Save '}) 
    });
 
 }
);

router.get('/', (req, res) => {
   PatModel.find()
     .then(getalldocumentsfrommongodb => {
       res.status(200).send(getalldocumentsfrommongodb);
     }) //CLOSE THEN
     .catch(err => {
       res.status(500).send({ message: err.message || 'Error in Fetch Employee ' })
     });//CLOSE CATCH
 } //CLOSE CALLBACK FUNCTION BODY      
 );//CLOSE GET METHOD 





 router.delete('/remove/:eid', (req, res) => {
  PatModel.findOneAndRemove({ "regname": req.params.eid })
    .then(deleteddocument => {
      if (deleteddocument != null) {
        res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
      }
      else {
        res.status(404).send('INVALID NAME ' + req.params.Patid);
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Delete with ID " + req.params.Patid });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY Line 60
); 



router.get('/search/:eid', (req, res) => {
  PatModel.find({ "regname": req.params.eid })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "Note not found with id " + req.params.eid });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.eid });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD





module.exports = router;

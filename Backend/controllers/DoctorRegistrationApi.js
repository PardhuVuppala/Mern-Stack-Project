const express = require('express');

const bcrypt = require('bcrypt');


const router = express.Router();



const DocModel = require('../models/Doc_Schema');

const mailservice=require('../servies/registrationseries');


router.post('/Docregister',(req,res) =>

{

  bcrypt.hash(req.body.Doctorpass, 10)
  .then((docpass) => {

    const Docobj=new DocModel ({
        Doctorname:req.body.Doctorname,
        DoctorMs:req.body.DoctorMs,
        DoctorExperience:req.body.DoctorExperience,
        DoctorAge:req.body.DoctorAge,
        DoctorGender:req.body.DoctorGender,
        DoctorEmail:req.body.DoctorEmail,
        DoctorDegree:req.body.DoctorDegree,
        DoctorTs:req.body.DoctorTs,
        Doctorpass:docpass
    });
    
   //INSERT/SAVE THE RECORD/DOCUMENT
   Docobj.save()
   .then(inserteddocument1 => {
    mailservice.sendmail(req.body.DoctorEmail, 'REGISTRATION SUCCESSFUL', 'THANK YOU FOR REGISTRATION' +inserteddocument1);
res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument1);
         })//CLOSE THEN
   .catch(err =>{
res.status(500).send({ message: err.message || 'Error in Employee Save '}) 
   });
  }
  )

}



);


router.get('/', (req, res) => {
  DocModel.find()
    .then(getalldocumentsfrommongodb => {
      res.status(200).send(getalldocumentsfrommongodb);
    }) //CLOSE THEN
    .catch(err => {
      res.status(500).send({ message: err.message || 'Error in Fetch Employee ' })
    });//CLOSE CATCH
} //CLOSE CALLBACK FUNCTION BODY      
);//CLOSE GET METHOD 




router.post('/logincheck', (req, res) => {
   
    DocModel.find({ "DoctorEmail": req.body.DoctorEmail, "Doctorpass": req.body.Doctorpass })
      .then(getsearchdocument1 => {
      if (getsearchdocument1.length > 0) {
        let enteredpassword = req.body.Doctorpass
        let storedpassword = getsearchdocument1[0].Doctorpass
        bcrypt.compare(enteredpassword, storedpassword)
          .then(result => {
            //console.log(result)
            if (result == true)
              res.status(200).send(getsearchdocument1);
            else
              res.status(404).send({ message: "PASSWORD NOT MATCHED" });
          })
       }
      else {
      res.status(404).send({ message: "NOT MATCHED" })
      }
      }) // CLOSE THEN
      .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.Doctorid });
      })//CLOSE CATCH
      }//CLOSE CALLBACK FUNCTION BODY
       )//CLOSE POST METHOD 
  //SHOULD BE EXPORTED















  router.delete('/remove/:eid', (req, res) => {
    DocModel.findOneAndRemove({ "DoctorEmail": req.params.eid })
      .then(deleteddocument => {
        if (deleteddocument != null) {
          res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
        }
        else {
          res.status(404).send('INVALID EMP ID ' + req.params.eid);
        }
      }) //CLOSE THEN
      .catch(err => {
        return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.eid });
      })//CLOSE CATCH
  }//CLOSE CALLBACK FUNCTION BODY Line 60
  ); 







  router.get('/search/:eid', (req, res) => {
    DocModel.find({ "DoctorEmail": req.params.eid })
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


const express = require('express');



const router = express.Router();

const bcrypt = require('bcrypt');


const EmpModel = require('../models/reg_schema');


const mailservice=require('../servies/registrationseries');

//url :-localhost:4500/reg/register


router.post('/register', (req, res) => 
                 {
                  bcrypt.hash(req.body.emppass, 10)
                  .then((encpass) => { 
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const empobj = new EmpModel({
                                 empname: req.body.empname,
                                 empemail: req.body.empemail,
                                 empmobile: req.body.empmobile,
                                 empcountry: req.body.empcountry,
                                 empLanguage:req.body.empLanguage,
                                 empgender: req.body.empgender,
                                 empdob: req.body.empdob,
                                 emppass: encpass,
                                 empaddress: req.body.empaddress,
                                 });//CLOSE EmpModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   empobj.save()
                         .then(inserteddocument => {
     mailservice.sendmail(req.body.empemail, 'REGISTRATION SUCCESSFUL', 'THANK YOU FOR REGISTRATION' +inserteddocument);                      
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Employee Save '})
                               });//CLOSE CATCH
                              }
                  )
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26


//getting information from server 
                             router.get('/', (req, res) => {
                              EmpModel.find()
                                .then(getalldocumentsfrommongodb => {
                                  res.status(200).send(getalldocumentsfrommongodb);
                                }) //CLOSE THEN
                                .catch(err => {
                                  res.status(500).send({ message: err.message || 'Error in Fetch Employee ' })
                                });//CLOSE CATCH
                            } //CLOSE CALLBACK FUNCTION BODY      
                            );//CLOSE GET METHOD 
                            
                            
                            
                            router.post('/logincheck', (req, res) => {
                              //console.log(req.body.empemail)
                              //console.log(req.body.emppass)
                              EmpModel.find({ "empemail": req.body.empemail })
                                .then(getsearchdocument => {
                                  if (getsearchdocument.length > 0) {
                                    //console.log(getsearchdocument[0].emppass)
                                    let enteredpassword = req.body.emppass
                                    let storedpassword = getsearchdocument[0].emppass
                                    bcrypt.compare(enteredpassword, storedpassword)
                                      .then(result => {
                                        //console.log(result)
                                        if (result == true)
                                          res.status(200).send(getsearchdocument);
                                        else
                                          res.status(404).send({ message: "PASSWORD NOT MATCHED" });
                                      })
                                  }
                                  else {
                                    res.status(404).send({ message: "EMAILID NOT FOUND" })
                                  }
                                }) // CLOSE THEN
                                .catch(err => {
                                  return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
                                })//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY
                            )//CLOSE POST METHOD 


router.delete('/remove/:eid', (req, res) => {
  EmpModel.findOneAndRemove({ "empemail": req.params.eid })
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


















// localhost:4500/emp/search/abc@gmail.com
//SEARCH EMPLOYEE BY EMPEMAIL
// CALLBACK function for get method using lambda 
router.get('/search/:eid', (req, res) => {
  EmpModel.find({ "empemail": req.params.eid })
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
'use strict';
/******************** 3RD PARTY DEPENDENCIES ********************/
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');
const app = express();

/********************** SETUP SERVER CONSTANTS **********************/
const client = new pg.Client(process.env.DATABASE_URL);
const PORT = process.env.PORT;

/********************** DATABASE CONFIGURATION **********************/
client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server Up:::::${PORT}:::::`)
    });
  })

/************************* MIDDLEWARE *************************/
app.use(bodyParser.json());
app.use(cors());


/************************* ROUTES *************************/

// app.post('/signUp', signUpPage);
// router.get('/confirmation', confirmationPage);
// router.get('/confirmation/:id', welcomePage)
// // router.post('/', creatInfo);
// router.post('/', sendSlack);
// router.post('/', sendEmail);

// /************************* ROUTE'S FUNCTIONS *************************/
app.post('/signUp', (req, res) => {

  let { first_name, last_name, email, phone_number, password } = req.body;
  let SQL = 'INSERT into will(first_name, last_name, email, phone_number,password) VALUES ($1, $2, $3, $4, $5);';
  let values = [first_name, last_name, email, phone_number, password];
  
  return client.query(SQL, values)
    .then(res.send({
      message: `hello ${req.body.first_name} your user was registered !`
    }))
    // .catch(err => handleError(err, res))
})

// function signUpPage(req, res) {
//   let { firstName, lastName, email, phoneNumber } = req.body;
//   let SQL = 'INSERT into Entertwine(first_name, last_name, email, phone_number) VALUES ($1, $2, $3, $4);';
//   let values = [firstName, lastName, email, phoneNumber];
//   return client.query(SQL, values)
//     .then(res.redirect('/signUp'))
//     // .catch(err => handleError(err, res))
// }

// function confirmationPage(req, res){
//   res.render(//route for the form 
//   )
// }

// // function signUpPage(req, res){
// //   res.render('Home')
// // }

// function welcomePage(req, res){
//   res.render();
// }

// function sendSlack(req, res){
//   res.redirect('/confirmation');
// }

// function sendEmail(req, res){
//   // HOW CAN I DO TO CHANCHE ALL FROM THE SPECIFIC THING THAT I WANT TO SELECT?
//   let SQL = `SELECT * FROM Entertwine`;
//   url = `https://hooks.slack.com/services/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`
//   return client.query(url,SQL)
//     .then(res.redirect('/confirmation'))
//     .catch(err => handleError(err, res)) 
// }

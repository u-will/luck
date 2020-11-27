// /******************** 3RD PARTY DEPENDENCIES ********************/
// const express = require('express');
// // const pg = require('pg');
// // const client = new pg.Client(process.env.DATABASE_URL);
// const superagent = require('superagent')

// const router = express.Router();

// /********************** DATABASE CONFIGURATION**********************/
// // client.connect()
// //   .then(()=> {
// //     app.listen(PORT, () => {
// //       console.log(`server Up:::::${PORT}:::::`)
// //     });
// //   })
// // client.on('error', err => console.error(err));

// router.post('/signUp', (req,res) => {
//   res.send({
//     message: `hello ${req.body.first_name} your user was registered !`
//   })
// })

// /************************* ROUTES *************************/

// router.post('/signUp',signUpPage);
// // router.get('/confirmation', confirmationPage);
// // router.get('/confirmation/:id', welcomePage)
// // // router.post('/', creatInfo);
// // router.post('/', sendSlack);
// // router.post('/', sendEmail);

// // /************************* ROUTE'S FUNCTIONS *************************/
// function signUpPage(req, res) {
//   let {firstName, lastName, email, phoneNumber} = req.body;
//    let SQL = 'INSERT into Entertwine(first_name, last_name, email, phone_number) VALUES ($1, $2, $3, $4);';
//    let values = [firstName, lastName, email, phoneNumber];
//    return client.query(SQL, value)
//     .then(res.redirect('/signUp'))
//     .catch(err => handleError(err, res))
// }

// // function confirmationPage(req, res){
// //   res.render(//route for the form 
// //   )
// // }

// // // function signUpPage(req, res){
// // //   res.render('Home')
// // // }

// // function welcomePage(req, res){
// //   res.render();
// // }

// // function sendSlack(req, res){
// //   res.redirect('/confirmation');
// // }

// // function sendEmail(req, res){
// //   // HOW CAN I DO TO CHANCHE ALL FROM THE SPECIFIC THING THAT I WANT TO SELECT?
// //   let SQL = `SELECT * FROM Entertwine`;
// //   url = `https://hooks.slack.com/services/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`
// //   return client.query(url,SQL)
// //     .then(res.redirect('/confirmation'))
// //     .catch(err => handleError(err, res)) 
// // }

// module.exports = router;
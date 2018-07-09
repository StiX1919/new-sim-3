
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");

const {
  test
} = require('./controllers/mainController')

const port = 3000;

const app = express();

//SAVED FOR BUILD
//app.use(express.static(`${__dirname}/public/build`));
//

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(console.log);
  
app.use(json());
app.use(cors());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
// );

// app.get('/api/getColor', (req, res) => {
//     res.send(color)
// })
app.get('/api/newTest/:NAME/:PASS', test)

//LISTENING
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
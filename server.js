const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const post = 8080;
const hostname = '192.168.0.112'
const router = require('./src/Router/index')
const db = require('./src/confix/index')




app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.listen(post, hostname,  () => {

    console.log(`Application started and Listening on port ${post} `);
  });
// server css as static

db.connnect()

router(app)



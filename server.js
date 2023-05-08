const express = require('express');
const app = express();
const expressLayouts = require("express-ejs-layouts")

app.set("view engine", "ejs")
app.set("views",__dirname + "/views")
app.set("layout","layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))

let firstTime = true

app.get('/', (req, res) => {
  let level = req.query.level || 0;
  var firstlevel = 0
  if (firstTime == true) {
    var firstlevel = req.query.level || 0

    firstTime = false
}
 let difference = firstlevel - level
  // store the battery level in a database or file system
  console.log('Received battery level:', level);
  res.render('index',{level , firstlevel});
});

app.listen(process.env.PORT || 5000 , () => {
  console.log(`Listening at http://localhost:${5000}`);
});
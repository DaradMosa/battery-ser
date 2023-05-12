const express = require('express');
const app = express();
const expressLayouts = require("express-ejs-layouts")
const cors = require('cors');

// enable CORS
app.use(cors());
app.set("view engine", "ejs")
app.set("views",__dirname + "/views")
app.set("layout","layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))

app.enable('trust proxy');
var level = 0;
app.get('/', (req, res) => {
   level = req.query.level;
  console.log('Received battery level:', level);
  res.render('index');
});

app.get('/lvl', (req, res) => {
   level = req.query.level;

  res.send(level.toString());
});

app.listen(process.env.PORT || 5000 , () => {
  console.log(`Listening at http://localhost:${5000}`);
});
const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');
const PORT=process.env.PORT || 3000;
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Hello World')
})
const personRoutes = require('./routes/personroutes');
app.use('/person', personRoutes);
const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

app.listen(PORT, () => {
  console.log("server is live");
});
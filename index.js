const express = require("express");

require('dotenv').config();
const database = require("./config/database")
const app = express();
const port = process.env.PORT;

const  route = require("./routes/client/index.route")
database.connect()

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

route(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
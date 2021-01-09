const express = require("express");
const path = require("path");
//paths
const controller = require("./controllers");
//handlebars
const exphbs = require("express-handlebars");

//initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

//middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//use controllers
app.use("/", controller);

//set handlebars as render engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));

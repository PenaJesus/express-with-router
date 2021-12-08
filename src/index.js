const express = require("express");

const app = express();

//allows app to use json in the request body
app.use(express.json());

//fetches routes 
const routes = require("./routes")

//allows us to use routes 
app.use(routes);

//define the port this app will listen on
const PORT = 8000;


app.listen(PORT, function(){
  console.log("Express Server started and listening on port", PORT)
})
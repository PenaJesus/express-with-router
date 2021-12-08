let express = require("express");

let router = express.Router();

//This array will hold the todo items as they are updated, added, deleted
//through the enpoints defined below
const database = []


router.get("/list", function(req, res){
  console.log("Get /list");
  res.json(database);
})

router.post("/list", function(req, res){
  console.log("POST /list");

  //read new item
  let newItem = req.body;

  //add it to our database
  database.push(newItem);

  //respond back with the item we added
  res.json(newItem)
})

router.put("/list/:pos", function(req, res){
  console.log("PUT /list/:pos")
  let input = req.body;
  let pos = req.params.pos;
  database[pos] = input;
  res.json("Updated list")
})

router.delete("/list/:pos", function(req, res){
  console.log("DELETE /list", req.params.pos)
  let deleted = database.splice(req.params.pos, 1);
  res.json("Deleted " + deleted + " from list")
})

module.exports = router
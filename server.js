// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
var sample = require('lodash.sample');
const PORT = process.env.PORT || 5000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Daniel's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

//All quotes 

app.get("/quotes", (req, res)=>{
  res.json(quotes);
});

// random quotes

// app.get("/quotes/random", (req, res)=>{
//   res.json(pickFromArray(quotes))
// });

//random quotes (using lodash)

app.get("/quotes/random", (req, res)=>{
  res.json(sample(quotes))
});

// Search query

app.get('/quotes/search', (req, res) => {
  const searchQuery = req.query.term.toLowerCase();
  res.send(quotes.filter(quotes => 
    quotes.quote.toLowerCase().includes(searchQuery) ||
    quotes.author.toLowerCase().includes(searchQuery)
    ))
});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

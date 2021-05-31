// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//load the quotes JSON
const quotes = require("./quotes.json");
const lodash = require("lodash");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Adem's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

//Level 1

app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.json(pickFromArray(quotes));
});

//Level 2

app.get("/quotes/search", (req, res) => {
  let searchQuery = req.query.term.toLowerCase();
  const matchingQuote = quotes.filter(
    (quoteParameter) =>
      quoteParameter.quote.toLowerCase().includes(searchQuery) ||
      quoteParameter.author.toLowerCase().includes(searchQuery)
  );
  res.send(matchingQuote);
});

app.get("/quotes/lodash", (req, res) => {
  res.json(lodash.sample(quotes));
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
const listener = app.listen(3000 || port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

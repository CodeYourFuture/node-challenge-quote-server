// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Johnny's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.get('/quotes', (req, res) => {
  res.send(quotes);
});

app.get('/quotes/search', (req, res) => {
  const searchVal = req.query.term.toLowerCase();
  res.send(quotes.filter(x => x.quote.toLowerCase().includes(searchVal)))
});

app.get('/quotes/random', (req, res) => {
  res.send(quotes[Math.floor(Math.random() * quotes.length)]);
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
const listener = app.listen(process.env.PORT || 4000, function () {
  console.log("Your app is listening on port: " + listener.address().port);
});

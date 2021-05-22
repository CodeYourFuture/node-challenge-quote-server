// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");

const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

const PORT = 3000;

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "<h3>Rafael's Quote Server!</h3> <h4>Ask me for /quotes</h4> <h4>Ask me for /quotes/random</h4> <h4>Ask me for /quotes/search?term=</h4>"
  );
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  let randomQuote = lodash.sample(quotes);
  response.send(randomQuote);
});

app.get("/quotes/search", function (request, response) {
  let term = quotes.filter(
    (quote) =>
      quote.quote.toUpperCase().includes(request.query.term.toUpperCase()) ||
      quote.author.toUpperCase().includes(request.query.term.toUpperCase())
  );
  response.send(term);
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

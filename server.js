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
  response.send("Jonathan's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

// Level 1

app.get('/quotes', (request, response) => {
  response.send(quotes);
});

app.get('/quotes/random', (request, response) => {
  response.send(pickFromArray(quotes));
});

// Level 2

app.get('/quotes/search', (request, response) => {
  const term = request.query.term;
  if(term) {
    const searchTerm = quotes.filter(item => {
      return (
        item.quote.toLowerCase().includes(term.toLowerCase()) || 
        item.author.toLowerCase().includes(term.toLowerCase())
      );
    });
    response.send(searchTerm);
  } else {
    response.send([]);
  }
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
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

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
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});
app.get("/quotes", function (request, response) {
  response.status(200).json(quotes);
});
app.get("/quotes/random", function (request, response) {
  response.status(200).json(pickFromArray(quotes));
});

app.get("/quotes/search", function (request, response) {
  let searchItem = request.query.s;
  if (searchItem) {
    response.json(
      quotes.filter((item) => {
        let new_author = item.author.toLowerCase()
        let new_quote = item.quote.toLowerCase()
        let new_search = searchItem.toLocaleLowerCase()
        if (new_author.includes(new_search) || new_quote.includes(new_search)) {
          return item
        }
      })
    );
  } else {
    response.json({ message: "Please include search query" });
  }
});

//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

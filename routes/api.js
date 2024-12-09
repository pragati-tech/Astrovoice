const express = require('express');
const router = express.Router();

// Array of random quotes
const quotes = [
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
  // Add more quotes here
];

router.get('/random-quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.render('index', { quote: randomQuote }); // Render the EJS view with the random quote
});

module.exports = router;

const express = require('express');
const router = express.Router();
const song=require('../models/songs');

const songs=[
    {
        title:'Ram Siya Ram',
        Lyrics:'song 1 lyrics',
        filepath:'public\songs\_Ram Siya Ram(PagalWorld.com.pe).mp3'
    },
    {
        title:'Hanuman chalisa',
        Lyrics:'song 2 lyrics',
        filepath:'public\songs\_Ram Siya Ram(PagalWorld.com.pe).mp3'
    }
]
// router.get('/random-quote', (req, res) => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     res.render('index', { quote: randomQuote }); // Render the EJS view with the random quote
//   });

module.exports=router;

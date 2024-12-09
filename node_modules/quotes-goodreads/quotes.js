'use strict'

const path = require('path');
const _ = require('lodash');
const fs = require('fs');

let data = null;
let length = 0;

function init() {
    if (data) {
        return;
    }

    data = fs.readFileSync(path.resolve(__dirname, 'quotes.json'), {
        encoding:'utf8',
        flag:'r'
    });
    data = JSON.parse(data);
    // data.sort(function(a, b) {
    //     return parseFloat(b.Popularity) - parseFloat(a.Popularity);
    // });
    // data = _.sortedUniqBy(data, 'Quote');
    length = data.length;
}


function getRandomQuote() {
    init();

    let randomNumber = Math.floor(Math.random() * Math.floor(length));
    return data[randomNumber];
}


function getRandomStringQuote() {
    init();

    return (getRandomQuote().quote);
}


function getRandomStringQuoteWithAuthor() {
    init();

    let quote = getRandomQuote();
    let strQuote = quote.quote + ' (' + quote.author + ')';
    return strQuote;
}


function getMostPopularQuote(index) {
    init();

    if (index) {
        if (_.isInteger(index) && index >= 1 && index < length) {
            let quote = data[index - 1];
            // console.log(quote.Popularity);
            return quote;
        } else {
            throw new Error('If index is provided, it has to be a integer >= 1 and < ' + length);
        }
    }

    let quote = data[0];
    // console.log(quote.Popularity);
    return quote;
}


function getMostPopularQuotesString(index) {
    init();

    return getMostPopularQuote(index).quote;
}


function getMostPopularQuotesStringWithAuthor(index) {
    init();

    let quote = getMostPopularQuote(index);
    let strQuote = quote.quote + ' (' + quote.author + ')';
    return strQuote;
}


function quotesByAuthor(author) {
    init();

    let byAuthor = _.filter(data, function(o) {
        return o.author.indexOf(author) >= 0;
    });
    return _.map(byAuthor, 'quote');
}


module.exports.init = init;
module.exports.getRandomStringQuote = getRandomStringQuote;
module.exports.getRandomStringQuoteWithAuthor = getRandomStringQuoteWithAuthor;
module.exports.getMostPopularQuotesString = getMostPopularQuotesString;
module.exports.getMostPopularQuotesStringWithAuthor = getMostPopularQuotesStringWithAuthor;
module.exports.quotesByAuthor = quotesByAuthor;

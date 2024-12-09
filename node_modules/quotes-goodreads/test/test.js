'use strict'

const quotes = require('../index');

describe('End to End', function () {
    it('Should be able to call init', function () {
        quotes.init();
    });

    it('Get random quote', function () {
        console.log(quotes.getRandomStringQuote());
        console.log(quotes.getRandomStringQuote());
    });

    it('Get random quote with author', function () {
        console.log(quotes.getRandomStringQuoteWithAuthor());
        console.log(quotes.getRandomStringQuoteWithAuthor());
    });

    it('Get top 3 popular quotes', function () {
        console.log(quotes.getMostPopularQuotesString());
        console.log(quotes.getMostPopularQuotesString(1));
        console.log(quotes.getMostPopularQuotesString(2));
        console.log(quotes.getMostPopularQuotesString(3));
    });

    it('Get top 3 popular quotes with authors', function () {
        console.log(quotes.getMostPopularQuotesStringWithAuthor());
        console.log(quotes.getMostPopularQuotesStringWithAuthor(1));
        console.log(quotes.getMostPopularQuotesStringWithAuthor(2));
        console.log(quotes.getMostPopularQuotesStringWithAuthor(3));
    });

    it('Get quote by authors', function () {
        console.log(quotes.quotesByAuthor('Dr. Seuss'));
        console.log(quotes.quotesByAuthor('Marilyn Monroe'));
        console.log(quotes.quotesByAuthor('Albert Einstein'));
    });

    it('Get quote by authors', function () {
        console.log(quotes.quotesByAuthor('Dr. Seuss'));
        console.log(quotes.quotesByAuthor('Marilyn Monroe'));
        console.log(quotes.quotesByAuthor('Albert Einstein'));
    });
});

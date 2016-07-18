const starwarsNames = require('./starwars-names.json'),
        uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: starwarsNames,
    random: uniqueRandomArray(starwarsNames)
};
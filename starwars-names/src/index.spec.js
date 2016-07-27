const expect = require('chai').expect,
    starWars = require('./index.js');

describe('starwars-names', () => {
    it('all returns array of strings', () => {
        expect(starWars.all).to.satisfy(isArrayOfStrings);
        
        function isArrayOfStrings(array) {
            return array.every((item) =>  typeof item === 'string' );
        }
    });
});
import NumberUtils from '../numberUtils'
const { calculateMultiples} = NumberUtils

describe('calculateMultiples', () => {
    it('returns a correct array of multiples up to the ceiling', () => {
        const ceiling = 50;
        const number = 12;
        const expectedMultiples = [12,24,36,48]
        expect(calculateMultiples(number, ceiling)).toEqual(expectedMultiples)
    });

    it('returns an empty array if the ceiling is less than the number', () => {
        const ceiling = 10;
        const number = 12;
        const expectedMultiples = []
        expect(calculateMultiples(number, ceiling)).toEqual(expectedMultiples)
    });

    it('returns an empty array if the ceiling less than 1', () => {
        const ceiling = 0;
        const number = 12;
        const expectedMultiples = []
        expect(calculateMultiples(number, ceiling)).toEqual(expectedMultiples)
    })

    it('returns an empty array if the ceiling is less than 0', () => {
        const ceiling = -8;
        const number = 12;
        const expectedMultiples = []
        expect(calculateMultiples(number, ceiling)).toEqual(expectedMultiples)
    })

    it('returns an empty array if the number is less than 1', () => {
        const ceiling = -8;
        const number = 12;
        const expectedMultiples = []
        expect(calculateMultiples(number, ceiling)).toEqual(expectedMultiples)
    })
})
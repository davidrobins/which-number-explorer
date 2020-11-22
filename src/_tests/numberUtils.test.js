import { calculateMultiples} from "../numberUtils";

describe('calculateMultiples', () => {
    it('returns a correct array of multiples up to the ceiling', () => {
        const ceiling = 50;
        const number = 12;
        const expectedMultiples = [12,24,36,48]
        expect(calculateMultiples(number, ceiling)).toEqual(expectedMultiples)
    });
})
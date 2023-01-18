import { pairClicked } from "../redux/pairDetails/pairDetails";
import { PAIR_CLICKED } from "../redux/pairDetails/pairDetails";
import pairDetailsReducer from "../redux/pairDetails/pairDetails";

describe('Pair Details Tests', () => {
    it('Action created successfuly', () => {
        const payload = {
            ticker: 'EUR/USD',
            bid: 1.6372,
            ask: 1.9283,
            high: 1.7821,
            low: 1.2432
        }

        const result = pairClicked(payload)

        expect({
            type: PAIR_CLICKED,
            payload: {
                ticker: 'EUR/USD',
                bid: 1.6372,
                ask: 1.9283,
                high: 1.7821,
                low: 1.2432
            }
        }).toEqual(result);
    })
    it('Action dispatched succesfully', () => {
        const payload = {
            ticker: 'EUR/USD',
            bid: 1.6372,
            ask: 1.9283,
            high: 1.7821,
            low: 1.2432
        }

        const action = pairClicked(payload)

        const result = pairDetailsReducer({}, action);

        expect(payload).toEqual(result);
    })
})
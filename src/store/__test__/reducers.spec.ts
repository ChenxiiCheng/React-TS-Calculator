import { rootReducer as reducer, initialState } from '../reducer';
import { ActionTypes } from '../actions';

const testState = initialState;

describe('reducers tests', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { type: ActionTypes.Reset })).toEqual(testState);
  });

  it('should set bill to number', () => {
    const payload = 100;
    expect(
      reducer(testState, {
        type: ActionTypes.BillChange,
        payload: String(payload),
      }).bill,
    ).toEqual(payload);
  });

  it('should set bill to decimal number', () => {
    const payload = 12.89;
    expect(
      reducer(testState, {
        type: ActionTypes.BillChange,
        payload: String(payload),
      }).bill,
    ).toEqual(payload);
  });

  it('should not be able to set string', () => {
    const payload = 'a';
    expect(
      reducer(testState, {
        type: ActionTypes.BillChange,
        payload: String(payload),
      }).bill,
    ).not.toEqual(payload);
  });
});

import { StoreState } from '../index';
import { selectTip } from '../selectors';
import { initialState } from '../reducer';

const testState: StoreState = initialState;

describe('selector tests', () => {
  it('should select correct tip', () => {
    expect(
      selectTip({
        ...testState,
        bill: 100,
        percentage: 10,
      }),
    ).toEqual(10);
  });
});

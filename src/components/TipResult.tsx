import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  selectTotal,
  selectTip,
  selectPerPerson,
  selectSplit,
} from '../store/selectors';

export const TipResult = () => {
  const total = useSelector(selectTotal);
  const tip = useSelector(selectTip);
  const perPerson = useSelector(selectPerPerson);
  const split = useSelector(selectSplit);

  return (
    <div>
      <div>
        <span>Bill Total</span>
        <span>${total}</span>
      </div>
      <div>
        <span>Tip</span>
        <span>${tip}</span>
      </div>
      {split > 1 && (
        <div>
          <span>Per Person</span>
          <span>${perPerson}</span>
        </div>
      )}
    </div>
  );
};

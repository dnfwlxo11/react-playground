import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

function CounterContainer(props) {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()));
  const onDecrease = useCallback(() => dispatch(decrease()));

  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    ></Counter>
  );
}

export default React.memo(CounterContainer);

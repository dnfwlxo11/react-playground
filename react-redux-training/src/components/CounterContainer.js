import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

function CounterContainer(props) {
  const { number, increase, decrease } = props;

  return <Counter 
    number={number} 
    onIncrease={increase} 
    onDecrease={decrease}>
  </Counter>
}

export default connect(
  ({counter}) => ({
    number: counter.number
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
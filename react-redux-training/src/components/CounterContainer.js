import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

function CounterContainer(props) {
  const { number, increase, decrease } = props;

  return <Counter number={number} onIncrease={increase} onDecrease={decrease}></Counter>
}

const mapStateToProps = (state) => ({
  number: state.counter.number
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      increase,
      decrease,
    },
    dispatch,
  )
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
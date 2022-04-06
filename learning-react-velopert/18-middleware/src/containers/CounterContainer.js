import { connect } from "react-redux";
// import { increase, decrease } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

// const CounterContainer = ({ number, increase, decrease }) => {
const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    // <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={increaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    // increase,
    // decrease,
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);

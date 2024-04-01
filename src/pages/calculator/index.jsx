import { useDispatch, useSelector } from "react-redux";
import {
  changeValue,
  decrement,
  increment,
} from "../../store/calculator/calculatorSlice";

const Calculator = () => {
  const count = useSelector((state) => state.calculator.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button className="text-white" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <input
        className="text-white"
        type="number"
        value={count}
        onChange={(e) => dispatch(changeValue(e.target.value))}
      />
      <button className="text-white" onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
};

export default Calculator;

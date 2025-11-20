import {useReducer} from "react";

const ReducerComponent = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <div>
        <h2>[ReducerComponent]</h2>
        <h1>{state.count}</h1>

        <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
        <button onClick={() => dispatch({type: 'RESET'})}>리셋</button>
      </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    case 'RESET':
      return {count: 0};
    default:
      return state;
  }
}

const initialState = {count: 0};

export default ReducerComponent;
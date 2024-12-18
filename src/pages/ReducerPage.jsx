import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

function ReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 100 });

  return (
    <div>
      <h1>当前计数：{state.count}</h1>
      <button
        className={state.count > 110 ? "p-2 bg-blue-500 text-white rounded-md mr-2 mt-2" : "p-2 bg-yellow-500 text-white rounded-md mr-2 mt-2"}
        onClick={() => dispatch({ type: "increment", payload: 10 })}>
        增加
      </button>
      <button
        className="p-2 bg-blue-500 text-white rounded-md"
        onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        减少
      </button>
    </div>
  );
}

export default ReducerPage;

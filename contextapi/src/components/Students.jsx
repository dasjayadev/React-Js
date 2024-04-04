import React, { useReducer } from 'react';

const countReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + action.payload;
    case "dec":
      return state - action.payload;
    default:
      return state;
  }
}

function Students() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <div style={{
        background: "green",
        color: "white",
        width: "50%",
        margin: "auto",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1>useReducer() hook</h1>
        <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>{count}</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={buttonStyle} onClick={() => dispatch({ type: "inc", payload: 1 })}>+1</button>
          <button style={buttonStyle} onClick={() => dispatch({ type: "dec", payload: 1 })}>-1</button>
          <button style={buttonStyle} onClick={() => dispatch({ type: "inc", payload: 10 })}>+10</button>
          <button style={buttonStyle} onClick={() => dispatch({ type: "dec", payload: 10 })}>-10</button>
        </div>
      </div>
    </>
  );
}

const buttonStyle = {
  background: "white",
  color: "green",
  padding: "10px 20px",
  margin: "0 10px",
  fontSize: "1em",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  outline: "none"
};

export default Students;

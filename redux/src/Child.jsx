import React from 'react';
import { TbBrandRedux } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "./redux/action/countAction"

function Child() {
    const count = useSelector((store) => store.countReducer);
    const  dispatch = useDispatch();//dispatch always take action object

  return (
    <>
     <h1 style={{
        backgroundColor:"lightblue",
        textAlign:"center",
        padding:"20px 40px"
      }}> <TbBrandRedux/> Welcome to our REDUX app</h1>

      <div>
        <button onClick={() => dispatch(increment())} > + </button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())} > - </button>
      </div>
    </>
  );
}

export default Child;

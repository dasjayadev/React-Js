import React, { useState } from 'react';
// import ClassLifecycle from './ClassLifecycle';
// import UseEffect from './UseEffect';
// import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
import Example5 from './Example5';

function App() {
  const[flag, setFlag] = useState(true)
  return (
    <>
      {/* <button onClick={() => setFlag(false)}>Change The Flag</button>
      {flag ? <ClassLifecycle color='green'/> : <h1>The component Removed</h1>}  */}
      {/* <UseEffect/> */}
      {/* <Example1/> */}
      <Example2/>
      {/* <Example3/> */}
      {/* <Example4/> */}
      {/* <Example5/> */}
    </>
  );
}

export default App;

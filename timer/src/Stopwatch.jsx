import React, { useState } from 'react';

function Stopwatch() {
    const[millisecond, setMillisecond] = useState(0);
    const[isStart, setIsStart] = useState(false);

    useEffect(() => {
        let setInterval;
        if(isStart){
            intervalId = setInterval(()=>{
                
            })
        }
      return () => {
        effect
      };
    }, [isStart]);

  return (
    <>
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <div className="clock">

        </div>
        <div className="btns">
            <button>Reset</button>
            <button>Start</button>
            <button>Stope</button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;



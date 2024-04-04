import React, {useEffect, useState} from 'react';

function UseEffect() {
    const  [count, setCount] = useState(0)
    const  [color, setColor] = useState(true)
    const  [count1, setCount1] = useState(0)

    useEffect( () => { //execute after every rander of the component
        console.log("useEffect() with 2nd argument");

    })

    useEffect (() => { //it exicute once after the inicial rander
        console.log("useEffect() with Empty dependancy");
        //this is similar to componentDidmount() method
    }, [])

    useEffect( () => { //Execute after every dependent state or props updation
        console.log("useEffect() with Count state Dependancy");
        //this is similar to ComponentDidUpdate() method
    }, [count])

    useEffect( () => { 
        console.log("useEffect() with a return function");
        setCount1(count*100)
        return () => { //Clean Up function exicutr before the useEffect statement 
            setCount1(0)
            console.log("This is clean-Up function");
            //similar to componentWillUnmount()
        }
        //this is similar to ComponentDidUpdate() method
    })

  return (
    <>
        <h1>UseEffect() hooks</h1>
        {console.log("rander method")}
        <h1>{count}</h1> 
        <button onClick={() => setCount(count + 1)}>Incres Count</button>
        <div style={{
            background: color ? "blue" : "green",
            height: "300px",width: "400px"
        }}>
        <button onClick={()=>setColor(!color)}>Change color</button>

        </div>
    </>
  );
}

export default UseEffect;


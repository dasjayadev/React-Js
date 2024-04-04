import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Color() {
    const color =  useSelector((store) => store.colorReducer);
    const dispatch = useDispatch()
    const [textColor,setTextColor] = useState("")
    const [bgColor,setBgColor] = useState({red:0,green:0,blue:0})
  return (
    <>
      <div style={{padding:"20px",
                   backgroundColor: `rgb(${color.bgColor.red},${color.bgColor.green},${color.bgColor.blue})`
      }}>
        <div className="text-color">
            <input type="text" id="color-display" placeholder='Enter Color Name'
                onChange={(event) =>setTextColor(event.target.value)}
            />
            <button style={{padding:"10px 10px", backgroundColor:"lightblue"}}
                onClick={()=>dispatch({type:"text",payload: textColor})}
            >Change The Text Color</button>
        </div>
        <h1 style={{color:color.textColor}}>Example text</h1>
        <div className="bg-color">
            RED:<input type="number" placeholder=' Enter a number 0~255' id="r"
                onChange={(event) => setBgColor({...bgColor,red: event.target.value})}
            /> <br />
            GREEN:<input type="number" placeholder=' Enter a number 0~255' id="g"
            onChange={(event) => setBgColor({...bgColor,green: event.target.value})}
             /> <br />
            BLUE:<input type="number" placeholder='Enter a number 0~255'
            onChange={(event) => setBgColor({...bgColor,blue: event.target.value})}
             id="b" />
        </div>
        <button style={{padding:"10px 10px",backgroundColor:"lightblue"}}
            onClick={()=>dispatch({type: "bg", payload:bgColor}) }
        >Change Background Color</button>
      </div>
    </>
  );
}

export default Color;

import React, { useEffect, useState } from "react";

function Example2() {
  const [text, setText] = useState("")
  const [charCount, setCharCount] = useState(0)
  const [wordCount,setWordCount] = useState(0)
  
  useEffect(() => {
    setCharCount(text.length)
    // setWordCount(()=>{
    //   let str = text.trim()
    //   let count = 1
    //   for (let i = 0; i < str.length; i++) if (str[i] === ' ') count++
    //   return count
    // })

    setWordCount(text.trim().split(' ').filter(e => e!="").length);
  }, [text]);
  return (
    <>
      <textarea
        rows={10}
        cols={50}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <h1>{text}</h1>
      <h3>No. of Characters :{charCount}</h3>
      <h3>No. of Words:{wordCount}</h3>
      <button onClick={() => setText(text.toUpperCase())}>Convert To UpperCase</button>
      <button onClick={()=> setText(text.toLowerCase()) }>Convert to LowerCase</button>
      <button onClick={()=> setText(text.trim().split("").reverse().join(""))}>Revers The String</button>
      <button onClick={()=> setText(text.trim().split("").reverse().join("").split(" ").reverse().join(" "))}>Revers the word</button>
    </>
  );
}

export default Example2;

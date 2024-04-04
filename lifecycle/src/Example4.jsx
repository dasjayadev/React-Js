import React, { useEffect, useState } from 'react';
import axios from  "axios";
// import img from "../public"

function Example4() {

    // let Image = [img.Image1, img.Image2]

    let [photo, setPhoto] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => setPhoto  (res.data))
            .catch(err =>  console.log(err))
    },[])

  return (
    <div>
      <h1>USEING AXIOS HTTP REQUEST</h1>
      {
        photo.map(e => {
            return (
                <img src={e.url} alt="" height={"50px"} width={"50px"}/>
            )
        })
      }
    </div>
  );
}

export default Example4;

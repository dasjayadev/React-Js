import React, { useEffect, useState } from 'react';

function Example3() {
  let [user, setUser] = useState([])
  useEffect(()=>{
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
    // .then(data => setUser(data))
    // .catch(err => console.log(err));
    fetchData()
  },[])
  async function fetchData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json()
    setUser(data)
  }
  return (
    <div>
        <h1>THIS IS A FEATCH API COMPONENT</h1>
        {user.map(e =>{
          return(
            <>
            <div className="card-body">
                <table cclassName="table text-center">
                  <thead className="table-secondary">
                    <tr>
                      <th>{e.id}</th>
                      <th>{e.name}</th>
                      <th>{e.username}</th>
                      <th>{e.email}</th>
                      <th>{e.address.city}</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <tr>EmpId</tr>
                      <tr>FirstName</tr>
                      <tr>LastName</tr>
                      <tr>Email</tr>
                      <tr>Gender</tr>
                      <tr>Phone</tr>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <li>{e.name}</li> */}
            </>
          
            )
        })}
    </div>
  );
}

export default Example3;

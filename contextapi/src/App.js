import React from 'react';
import Students from './components/Students';
import Courses from './components/Courses';
import studentContext from './context/StudentContext';
import { MernContextAPI } from './context/MernCntext';

function App() {
  let student = {name:"jayadev", age:"29", address:"cuttack"}
  return (
    <>
    <MernContextAPI>
      <studentContext.Provider value={student}>
        <Students/>
        <Courses />
      </studentContext.Provider>
    </MernContextAPI>
  </>
  );
}

export default App;

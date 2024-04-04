import logo from './logo.svg';
import './App.css';
import Test  from "./Test";
import ClassComponent from './ClassComponent';

function App() {
  let fruits = ["apple","banana","grapes","lichi"]
  return (
    <>

      <h1>THIS IS OUR FIRST CODE</h1>
      <Test fruits = {fruits}></Test>
      <ClassComponent name="Ashwini" address="chennai" wickets="504"/>
    </>
  );  
}

export default App;

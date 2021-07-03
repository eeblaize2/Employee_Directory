import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [employees, setEmployees]= useState([])

useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        setEmployees(data.results)
    }) 
}, [])
  return (
    <div className="App">
      <h1>Employee Directory</h1>
    </div>
  );
}

export default App;

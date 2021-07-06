import React,{useState, useEffect} from 'react';
import './App.css';
import TableRow from './TableRow';

function App() {
  const [employees, setEmployees]= useState([])
  const [filtered, setFiltered]= useState([])
  const [state, setState]= useState('')

useEffect(() => {
    fetch('https://randomuser.me/api/?results=30&nat=us')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        setEmployees(data.results)
        setFiltered(data.results)
    }) 
}, [])
  const handleSort=(event)=>{
    event.preventDefault()
    const upDated= [...employees]
    upDated.sort((a,b)=>{
      if(a.name.last<b.name.last){
        return -1
      }
      if(a.name.last>b.name.last){
        return 1
      }
      return 0
    })
    console.log(upDated)
    setFiltered(upDated)
  }
  const handleFilter=(event)=>{
    event.preventDefault()
    const upDated= employees.filter(employee=> employee.location.state.toLowerCase()===state.toLowerCase())
    setFiltered(upDated)
  }
  const handleChange=(event)=>{
    setState(event.target.value)
    if(state.length===0){
      setFiltered(employees)
    }
  }
  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <form onSubmit={handleFilter}>
      <input type= 'text' value={state} onChange={handleChange} placeholder='Search Employee by State'/>
      <button type= 'submit'>Search</button>
      </form>
      <button type= 'button' onClick= {handleSort}>Sort by Last Name</button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(employee=>(
           <TableRow key={employee.id.value} employee={employee}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

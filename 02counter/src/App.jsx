import { useState } from "react";

function App(){
  let [counter,setCounter] = useState(15)
 
  // let counter = 15;
  const addValue = ()=>{
    setCounter(counter+1)
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return (
  <>
 <h1>Chai aur react</h1>
 <h2>counter value:{counter}</h2>
 <button onClick={addValue}>Add Value</button>
 <br/>
 <button onClick={removeValue}>remove value</button>
  </>
  )
}
export default App
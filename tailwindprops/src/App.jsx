import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  // let obj = {
  //   username: "akhilesh",
  //   age:21
  // }
  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2'>Tailwind css</h1>
  <Card username="dipti" btnText = "click me"/>
  <Card username="preeti" btnText = "visit me"/>
    </>
  )
}

export default App

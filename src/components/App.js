import React, { useEffect, useState } from 'react'
import img1 from '../images/1.jpg';
import { Wave } from 'react-animated-text';
import './App.css'
const App = () => {
  let[loading,setloading]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setloading(true);
    },3000)
  })
  return (
    <div>
        {
          loading===true?<h1 className='comingSoon'><Wave
          text="Coming Soon"
          effect="stretch"
          effectChange="2"
          className="animated"
        /></h1>:<img  src={img1}  alt='images'/>
        }
    </div>
  )
}

export default App
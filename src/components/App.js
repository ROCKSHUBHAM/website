import React, { useEffect, useState } from 'react'
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpeg';
import { Wave } from 'react-animated-text';
import './App.css'
const App = () => {
  let [loading, setloading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 3000)
  })
  return (
    <div className='comingSoon'>
    <img style={{ height: "20vw" ,display:"block"}} src={img2} alt='images' />
    <h1> <Wave
      text="Coming Soon"
      effect="stretch"
      effectChange="2"
      className="animated"
    />
    </h1>
  </div>
  )
}

export default App
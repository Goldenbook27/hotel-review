import './App.css'
import Hero from './components/Hero';
import Navbar from './components/CustomNavbar';
import './index.css';
import { useState } from 'react';
import RightSide from './components/RightSide';
import CustomNavbar from './components/CustomNavbar';

function App() {
const [right,setright] = useState('')
  return (
    <div>
      <CustomNavbar/>
    <div className='flex gap-20 justify-center pt-5 p-20'>

      <Hero setright={setright}/>
      <RightSide rightside={right} />
    </div>
    </div>
    
  )
}

export default App

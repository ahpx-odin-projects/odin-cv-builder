import './App.css'

import Sidebar from './Components/Sidebar/Sidebar'
import Preview from './Components/CVPreview/Preview'
import { useState } from 'react'

function App() {
  const [info, setInfo] = useState({
    name : "Placebo Info",
    email: "jojo@joestar.com",
    phone: "+1 1145141919",
  });

  function handleInfoChange(i) {
    setInfo(i);
  }

  return (
    <div className='main'>
      <div className='sidebar'>
        <Sidebar onInfoChange={handleInfoChange} />
      </div>
      <div className='preview'>
        <Preview info={info} />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

import './Components/Sidebar'
import Sidebar from './Components/Sidebar'
import Card from './Components/Card'

function App() {
  return (
    <div className='main'>
      <Sidebar />
      <Card>
        <h1>CV Preview</h1>
      </Card>
    </div>
  )
}

export default App

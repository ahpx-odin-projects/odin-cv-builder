import { useState } from 'react'
import './App.css'

import Sidebar from './Components/Sidebar/Sidebar'
import Card from './Components/Universal/Card'

function App() {
  return (
    <div className='main'>
      <Sidebar />
      <Card style={{
        height: '80vh',
      }}>
        <h1>CV Preview</h1>
      </Card>
    </div>
  )
}

export default App

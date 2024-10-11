import './App.css'

import Sidebar from './Components/Sidebar/Sidebar'
import Preview from './Components/CVPreview/Preview'

function App() {
  return (
    <div className='main'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='preview'>
        <Preview />
      </div>
    </div>
  )
}

export default App

import './App.css'

import Sidebar from './Components/Sidebar/Sidebar'
import Preview from './Components/CVPreview/Preview'
import Experience from './Components/CVPreview/Experience'
import { useState } from 'react'

function App() {
  const [info, setInfo] = useState({
    name : "Placebo Info",
    email: "jojo@joestar.com",
    phone: "+1 1145141919",
  });

  const [education, setEducation] = useState([
    {
      institution: "Harvard University",
      title: "Bachelor of Science in Computer Science",
      start: "2015",
      end: "2019",
    },
    {
      institution: "Stanford University",
      title: "Master of Science in Artificial Intelligence",
      start: "2019",
      end: "2021",
    }
  ]);
  const [experience, setExperience] = useState([
    {
      institution: "Google",
      title: "Software Engineer",
      start: "2021",
      end: "2022",
    },
    {
      institution: "Facebook",
      title: "Frontend Developer",
      start: "2020",
      end: "2021",
    },
    {
      institution: "Amazon",
      title: "Backend Developer",
      start: "2018",
      end: "2020",
    }
  ]);

  function handleInfoChange(i) {
    setInfo(i);
  }

  function handleEducationChange(e) {
    setEducation(e);
  }

  function handleExperienceChange(e) {
    setExperience(e);
  }

  return (
    <div className='main'>
      <div className='sidebar'>
        <Sidebar onInfoChange={handleInfoChange} onEducationChange={handleEducationChange} onExperienceChange={handleExperienceChange}/>
      </div>
      <div className='preview'>
        <Preview info={info} education={education
            .map((e) => {
              return <Experience title={e.institution} subtitle={e.title} startTime={e.start} endTime={e.end} key={e.institution}/>
            })  
        } experience={experience
          .map((e) => {
            return <Experience title={e.institution} subtitle={e.title} startTime={e.start} endTime={e.end} key={e.institution}/>
          })
        } />
      </div>
    </div>
  )
}

export default App

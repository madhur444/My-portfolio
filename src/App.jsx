import React from 'react'
import './index.css'
import Hero from './Hero'
import Skill from './Skill'
import Experience from './Experience'
import Projects from './Projects'
import About from './About'
import Achievement from './Achivment'
import Contact from './Contact'
const App = () => {
  return (
    <div className='bg-gray-950'>
    <div><Hero/></div>
    <div><Skill/></div>  
    <div><Experience/></div>  
    <div><Projects/></div>
    <div><Achievement/></div>
    <div><About/></div>
    <div><Contact/></div>
    </div>
  )
}

export default App
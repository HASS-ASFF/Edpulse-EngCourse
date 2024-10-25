import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Empowering Tomorrow's Communicators Today</h2> 
<p>Begin a transformative journey with our comprehensive English language courses. Our innovative curriculum is designed to equip you with the fluency, confidence, and communication skills needed to thrive in an increasingly globalized world.</p> 
<p>With a focus on interactive learning, real-world application, and personalized support, our courses prepare you to excel in professional, academic, and everyday settings where English is essential.</p> 
<p>Whether you aim to advance your career, travel with ease, or enhance your personal development, our diverse range of courses provides the perfect path to achieve your goals and unlock your full potential in mastering the English language.</p>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import TeamCard from '../components/teamCard'
import Faqq from '../components/Faq'

const About = () => {
  return (
    <div className='about'>
       <div className="container-about">
        <h1 className='title'>ABOUT US</h1>
        <div className="aboutFirst">
        <h2>WHO ARE WE</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sapiente mollitia possimus, architecto et earum non est, nostrum ducimus reiciendis ratione obcaecati laudantium fugiat veritatis ipsam corrupti cumque excepturi.</p>
        </div>
      <div className="aboutSecond">
        <h2>management team</h2>
        <div className="cards">
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
        </div>
      </div>
    <Faqq/>
       </div>
    </div>
  )
}

export default About
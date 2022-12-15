import React from 'react'
import './about.css'
import ME from '../../assets/change square.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {RiFolderOpenFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5 className='heading1'>Get To Know</h5>
      <h2 className='heading2'>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=""/>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>12 months working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5 >Internships</h5>
              <small>2</small>
            </article>

            <article className='about__card'>
              <RiFolderOpenFill className='about__icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
           <br/>
        
          
            <h3 className='about_myself'>
            Hello! I'm Abhigyan, a Machine Learning engineer based in Asansol, West Bengal who's experienced in building Machine Learning projects from scratch.
            <br/>
            <br/>
            I'm currently attending The Neotia University, West Bengal as a Computer Science major. Over the last few years I had the opportunity to work at Sidalceas EduTech as a Research Intern where I researched upon "Effect of Coronavirus on Indian population" and highlighted the reasons for the change in aspect of living of people. I also worked asa a Machine Learning Intern at Feynn Labs where I build "The 30T" a versatile chatbot that fills the absence of a sales executive and develops a hassle-free experience for the customer, with my team I also predicted the best location for an EV startup.
            </h3>
          
          <br />
          <a href="#contact" className='btn-btn-primary'>Lets's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
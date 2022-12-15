import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='heading1'>What Skills I Have</h5>
      <h2 className='heading2'>My Experience</h2>

      <div className="container experience__container">
        <div className="ecperience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            
            <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icons'/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Machine Learning</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Scratch 3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Deep Learning</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Data Science</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Data Analyst</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>HTML & CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            
          </div>
        </div>
        {/* End of Skills */}
                
        <div className="experience__backend">
        <h3>Tools</h3>
          <div className="experience__content">
            
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Numpy</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Pandas</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Scikit-Learn</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Matplotlib</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>OpenCv</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>TensorFlow</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Seaborn</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>NLTK</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
                        
          </div>
        </div>
      </div>
    </section>    
  )
}

export default Experience
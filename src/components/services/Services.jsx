import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5 className='heading1'>What I Offer</h5>
      <h2 className='heading2'>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h2 className='heading3'>Consulting</h2>
          </div>

          <ul className='service__list'>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>ML Proof of Concept</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Solution Architecture</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>ML Tools & Hosting Assessment</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>ML Library Assessment</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Extending Machine Learning Libraries</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Model re-engineering</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Solution Architecture</p>
            </li>

          </ul>
        </article>
{/* ===== End of Part 1 ===== */}

        <article className="service">
          <div className="service__head">
          <h2 className='heading3'>Managed Services</h2>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon' />
              <p>ML Lifecycle Management</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Performance Monitoring</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Model as a Service</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Analysis</p>
            </li>

          </ul>
        </article>
{/* ===== End of PArt 2 ===== */}

<article className="service">
          <div className="service__head">
          <h2 className='heading4'>Solution and design Implementation</h2>
          </div>

          <ul className='service__list'>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Computer Vision or NLP Applications</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Training, Performance Tuning & Testing Models</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Algorithm Porting & Deployment</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>ML Data Annotation for Training and Validation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing Machine Learning Apps according to Client Requirements</p>
            </li>

          </ul>
        </article>
{/* ===== End of Part 3 ===== */}

      </div>
    </section>
  )
}

export default Services
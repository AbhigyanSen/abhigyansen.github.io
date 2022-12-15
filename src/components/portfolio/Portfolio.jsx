import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Drowsiness.jpg'
import IMG2 from '../../assets/Chatbot.jpg'
import IMG3 from '../../assets/Movie.jpeg'
import IMG4 from '../../assets/Sentiment.jpeg'
import IMG5 from '../../assets/Flappybird.jpg'

import Detection from '../../assets/Live Detection.pdf'
import Bot from '../../assets/Chatbot.pdf'
import FlappyBird from '../../assets/Briefing FlappyBird.mp4'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='heading1'>My Recent Works</h5>
      <h2 className='heading2'>Portfolio</h2>

      <div className="container portfolio__container">
             
        <article className="portfolio__item">
          <div className="portfolio __item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Drowsiness Detection</h3>
          <div className="portfolio_item-cta">
            <a href={Detection} download className='btn'>Documentation</a>
            <a href="https://colab.research.google.com/drive/1-a-MvY4Rcb-ESghDN6DzhDckpkSMJydg?usp=share_link" className="btn btn-primary" target='abc'>Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio __item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>The 3OT</h3>
          <div className="portfolio_item-cta">
          <a href={Bot} download className='btn'>Documentation</a>
            <a href="https://colab.research.google.com/drive/1CUuMtcLstS-mj1IBFEPCO6YFFD1LyQ34?usp=share_link" className="btn btn-primary" target='abc'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio __item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Movie Recommendation</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='abc'>Documentation</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='abc'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio __item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Sentiment Analysis</h3>
          <div className="portfolio_item-cta">
            <a href="https://1drv.ms/w/s!Aj5bn1JuTat4vCui0vWTagTCFfKX?e=4u8M7W" className="btn" target='abc'>Documentation</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='abc'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio __item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>FlappyBird</h3>
          <div className="portfolio_item-cta">
            <a href={FlappyBird} download className='btn'>Briefing</a>
            <a href="https://scratch.mit.edu/projects/685542760/" className="btn btn-primary" target='abc'>Play</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
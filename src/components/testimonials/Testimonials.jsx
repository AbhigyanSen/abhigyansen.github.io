import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Avatar1.jpg'
import AVTR2 from '../../assets/Avatar2.jpg'
import AVTR3 from '../../assets/Avatar3.jpg'
import AVTR4 from '../../assets/Avatar4.jpg'

// https://swiperjs.com/react
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 className='heading1'>Review from Clients</h5>
      <h2 className='heading2'>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, in? Deserunt velit debitis ullam voluptatem architecto. Odit asperiores quia excepturi perspiciatis iure molestias neque minus! Mollitia eveniet explicabo doloribus cumque.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, in? Deserunt velit debitis ullam voluptatem architecto. Odit asperiores quia excepturi perspiciatis iure molestias neque minus! Mollitia eveniet explicabo doloribus cumque.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, in? Deserunt velit debitis ullam voluptatem architecto. Odit asperiores quia excepturi perspiciatis iure molestias neque minus! Mollitia eveniet explicabo doloribus cumque.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, in? Deserunt velit debitis ullam voluptatem architecto. Odit asperiores quia excepturi perspiciatis iure molestias neque minus! Mollitia eveniet explicabo doloribus cumque.
            </small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials
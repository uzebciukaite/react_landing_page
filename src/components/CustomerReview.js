import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import {Pagination, Autoplay } from 'swiper';
import { Container } from 'react-bootstrap';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CustomerReview = () => {
 
    const reviews = [
        {
    name: "Meredith",
    image: "https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
        {
    name: "Jack",
    image: "https://images.pexels.com/photos/2635534/pexels-photo-2635534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
        {
    name: "Michael",
    image: "https://images.pexels.com/photos/64385/pexels-photo-64385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
        {
    name: "Pam",
    image: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
        {
    name: "Graham",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
        {
    name: "Rebecca",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
        {
    name: "Jim",
    image: "https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
        {
    name: "Darryl",
    image: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    ]


  return (
    <Container id="reviews" className='w-100 pt-5'>
       <hr className='w-25 mt-4' />
        <h2 className='w-75 mb-5'>Our customers' reviews</h2>
       
        <Swiper
       
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
    >
      {reviews.map((x, i ) => (
            <SwiperSlide className='swiper-slide  '>
              <Container className='w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center cusstomBoxStyle'>
                  <img src={x.image} alt="" />
                  <h3>{x.name}</h3>
                  
                  <p className='w-75 mx-auto'>" {x.review} "</p>
              </Container>
              
            </SwiperSlide>
              
        ))}
    </Swiper>

    </Container>
     

  )
}

export default CustomerReview
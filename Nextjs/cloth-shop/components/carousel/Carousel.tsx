'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Carousel = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        modules={[Autoplay, Navigation]}
        className=""
      >
        <SwiperSlide className='2xl:h-[calc(100vh-100px)]! sm:h-100! w-full relative'>
          <Image className='w-full h-full' src='/images/slide-img1.png' fill alt='Slide Image'/>
        </SwiperSlide>
        <SwiperSlide className='2xl:h-[calc(100vh-100px)]! sm:h-100! w-full relative'>
          <Image className='w-full h-full' src='/images/slide-img2.png' fill alt='Slide Image'/>
        </SwiperSlide>
        <SwiperSlide className='2xl:h-[calc(100vh-100px)]! sm:h-100! w-full relative'>
          <Image className='w-full h-full' src='/images/slide-img3.png' fill alt='Slide Image'/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel
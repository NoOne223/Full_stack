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
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="min-h-screen"
      >
        <SwiperSlide className='h-screen w-full'>
          <Image src='/images/slide-img1.png' width={500} height={500} alt='Slide Image'/>
        </SwiperSlide>
        <SwiperSlide className='h-screen w-full'>
          <Image src='/images/slide-img2.png' width={500} height={500} alt='Slide Image'/>
        </SwiperSlide>
        <SwiperSlide className='h-screen w-full'>
          <Image src='/images/slide-img3.png' width={500} height={500} alt='Slide Image'/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel
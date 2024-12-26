import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css';
import './template.css'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TemplateTagButton = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
  };
  return (
    <div className='sticky top-0 left-0 w-full bg-white p-5 shadow-2xl z-10'>
        <div className='container mx-auto p-[10px]'>
          <Slider {...settings}>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 1</button>
            </div>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 2</button>
            </div>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 3</button>
            </div>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 4</button>
            </div>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 5</button>
            </div>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 6</button>
            </div>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 7</button>
            </div>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 8</button>
            </div>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 9</button>
            </div>
            <div>
              <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>Template 10</button>
            </div>
          </Slider>
        </div>
        <div className='flex justify-center gap-x-2 mt-3'>
            <input className='py-1 px-2 border border-black max-w-md w-full focus:outline-color-1 rounded' type='text' placeholder='Enter keywords'/>
            <button className='hover:bg-gray-300 w-9 h-9 rounded'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
    </div>
  )
}

export default TemplateTagButton
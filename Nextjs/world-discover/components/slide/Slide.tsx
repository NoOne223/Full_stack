'use client'
import React from 'react'
import './slide.css'
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Slider = dynamic(() => import('react-slick'), { ssr: true });


const Slide = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
    };
  return (
    <div className='mt-5'>
        <Slider {...settings}>
            <div className='px-16'>
                <div className='shadow-custom-1 rounded-xl'>
                    <div className='bg-primary-color text-white text-center py-3 rounded-t-xl'>
                        <h2>Gold member</h2>
                    </div>
                    <ul className='list-none p-3'>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                    </ul>
                    <div className='bg-primary-color text-white text-center py-3 rounded-b-xl min-h-14'></div>
                </div>
            </div>
            <div className='px-16'>
                <div className='shadow-custom-1 rounded-xl'>
                    <div className='bg-primary-color text-white text-center py-3 rounded-t-xl'>
                        <h2>Silver member</h2>
                    </div>
                    <ul className='list-none p-3'>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                    </ul>
                    <div className='bg-primary-color text-white text-center py-3 rounded-b-xl min-h-14'></div>
                </div>
            </div>
            <div className='px-16'>
                <div className='shadow-custom-1 rounded-xl'>
                    <div className='bg-primary-color text-white text-center py-3 rounded-t-xl'>
                        <h2>Platinum member</h2>
                    </div>
                    <ul className='list-none p-3'>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4 border-b border-gray-400'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                        <li className='flex gap-x-2 py-4'>
                            <FontAwesomeIcon className='text-primary-color' icon={faCircleCheck} />
                            <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum optio repellat rem!
                            </p>
                        </li>
                    </ul>
                    <div className='bg-primary-color text-white text-center py-3 rounded-b-xl min-h-14'></div>
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default Slide
import React from 'react'
import './parallax.css'
import Image from 'next/image'
import PrimaryButton from '../buttons/PrimaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const Parallax = () => {
  return (
    <div className='parallax-banner relative'>
      <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-fit m-auto'>
        <Image className='w-1/2 mx-auto' src='/images/plane-2.png' width={500} height={500} alt='Plane'/>
        <div className='italic container mx-auto text-center my-5'>
          <h1 className='text-secondary-color font-extrabold text-6xl uppercase'>Go everywhere you want and enjoy your life</h1>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum labore exercitationem commodi quae eaque tempora provident consectetur, quasi ducimus aperiam sed ea obcaecati natus voluptas eos. Mollitia, vel eum.</p>
          <PrimaryButton className='flex items-center justify-center gap-x-2 mx-auto'>Let go <FontAwesomeIcon className='w-5' icon={faPlaneDeparture} /></PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default Parallax
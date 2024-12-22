import React from 'react'
import './footer.css'
import FooterForm from '../forms/FooterForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
        <div className='footer-banner mt-10 py-52'>
          <div className='container mx-auto p-[10px] text-white'>
            <div className=' max-w-3xl ml-auto'>
              <h2 className='text-4xl font-extrabold'>If you have anything to ask, please fill this form</h2>
              <FooterForm />
            </div>
          </div>
        </div>
        <div className='bg-white mt-10 py-3'>
            <div className='container mx-auto p-[10px] flex gap-x-5'>
              <div className='max-w-96'>
                <h2 className='text-2xl font-extrabold'>Branch 1</h2>
                <div className='mt-2 flex'>
                  <FontAwesomeIcon className='me-2' icon={faLocationDot} />
                  <span>787/1 Truong Chinh, Tay Thanh, Tan Phu, Ho Chi Minh City</span>
                </div>
                <div className='mt-2'>
                  <Link className='hover:text-color-2' href='tel:0982582754'>
                    <FontAwesomeIcon className='me-2' icon={faHeadset} />
                    <span>0982582754</span>
                  </Link>
                </div>
              </div>
              <div className='max-w-96'>
                <h2 className='text-2xl font-extrabold'>Branch 2</h2>
                <div className='mt-2 flex'>
                  <FontAwesomeIcon className='me-2' icon={faLocationDot} />
                  <span>787/1 Truong Chinh, Tay Thanh, Tan Phu, Ho Chi Minh City</span>
                </div>
                <div className='mt-2'>
                  <Link className='hover:text-color-2' href='tel:0982582754'>
                    <FontAwesomeIcon className='me-2' icon={faHeadset} />
                    <span>0982582754</span>
                  </Link>
                </div>
              </div>
              <div className='flex-auto max-w-3xl'>
                <h2 className='text-4xl font-extrabold italic'>Thank you</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quasi sequi voluptatibus ipsam ullam eaque tempore explicabo, vero, ea debitis quam, 
                  esse sint adipisci voluptatem ad ex. Molestiae, a officia!
                </p>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
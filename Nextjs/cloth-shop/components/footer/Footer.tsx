import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-16'>
       <div className='container mx-auto p-3 bg-[url(/images/banner.png)] bg-cover bg-no-repeat min-h-[900px] content-center'>
       <div className="flex gap-x-10">
        <div className='bg-white shadow-2xl rounded-xl p-5 w-1/2'>
          <h3 className='sub-title'>Liên hệ cửa hàng</h3>
          <ul className="text-primary">
            <li className="py-2">
                <FontAwesomeIcon icon={faClock} />
                <span className="ms-2">8:00 - 21:00</span>
            </li>
            <li className="py-2">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="ms-2">Thứ 2 - Thứ 7</span>
            </li>
            <li className="py-2">
                <Link href='tel:'>
                <FontAwesomeIcon icon={faPhone} />
                <span className="ms-2">0982582754</span>
                </Link>
            </li>
            <li className="py-2">
                <Link href='mailto:'>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="ms-2">example_email@gmail.com</span>
                </Link>
            </li>
            <li className="py-2">
                <h3>Branch 1</h3>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ms-2">787 street, Hai Ba Trung Ward , District 1, Ho Chi Minh City</span>
            </li>
            <li className="py-2">
                <h3>Branch 2</h3>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ms-2">787 street, Hai Ba Trung Ward , District 1, Ho Chi Minh City</span>
            </li>
            <li className="py-2">
                <h3>Branch 3</h3>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ms-2">787 street, Hai Ba Trung Ward , District 1, Ho Chi Minh City</span>
            </li>
          </ul>
        </div>
        <div className='bg-white shadow-2xl rounded-xl p-5 w-1/2'>
          <h3 className='sub-title'>Phương thức vận chuyển</h3>
          
        </div>
       </div>
       </div>
       <div className='p-3 shadow-sm bg-primary shadow-secondary'>
        <p className='text-center text-white'>Copyright © 2025 THE Blazer.</p>
       </div>
    </footer>
  )
}

export default Footer
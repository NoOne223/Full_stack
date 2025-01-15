import React from 'react'
import './footer.css'
import ContactForm from '../form/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
        <div className='footer-layout py-[150px]'>
            <div className='container mx-auto p-3'>
                <ContactForm />
            </div>
        </div>
        <div className='bg-white p-2 text-center'>
            <Link className='text-2xl mx-5' href='' title=''>
                <FontAwesomeIcon icon={faSquareFacebook} />
            </Link>
            <Link className='text-2xl mx-5' href='' title=''>
                <FontAwesomeIcon icon={faPhone} />
            </Link>
        </div>
    </footer>
  )
}

export default Footer
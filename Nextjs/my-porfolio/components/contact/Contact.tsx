import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <footer className='container mx-auto p-3'>
        <div className=''>
            <div>
                <Link className='tab-button' href=''>
                    <FontAwesomeIcon icon={faFacebookF} />
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Contact

import React from 'react'
import { faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareXTwitter, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays, faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const HomepageContent3 = () => {
  return (
    <div className="container mx-auto p-3">
        <div className="grid grid-cols-3 gap-x-10">
        <div>
            <Image className="h-full" src='/images/contact-img2.jpeg' width={500} height={500} alt="Image"/>
        </div>
        <div>
            <Image className="max-h-[450px] object-cover object-bottom" src='/images/contact-img.jpeg' width={500} height={200} alt="Image"/>
            <div className="py-5">
            <h2 className="sub-title">Theo dõi chúng tôi</h2>
            <ul className="text-primary flex gap-x-6 my-6">
                <li>
                <Link className="text-4xl" href=''>
                    <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
                </li>
                <li>
                <Link className="text-4xl" href=''>
                    <FontAwesomeIcon icon={faSquareInstagram} />
                </Link>
                </li>
                <li>
                <Link className="text-4xl" href=''>
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                </Link>
                </li>
                <li>
                <Link className="text-4xl" href=''>
                    <FontAwesomeIcon icon={faTiktok} />
                </Link>
                </li>
                <li>
                <Link className="text-4xl" href=''>
                    <FontAwesomeIcon icon={faSquarePinterest} />
                </Link>
                </li>
                <li>
                <Link className="text-4xl" href=''>
                    <FontAwesomeIcon icon={faYoutube} />
                </Link>
                </li>
            </ul>
            <p className="text-primary">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores numquam magni minus qui explicabo repellendus, accusamus nesciunt voluptatum 
                deserunt modi eum rerum fugiat quod eius enim! Doloribus, reiciendis adipisci."
            </p>
            </div>
        </div>
        <div className="relative">
            <h2 className="sub-title mb-6">Liên hệ chúng tôi</h2>
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
            <div className="bg-secondary absolute bottom-0 right-0 h-40 w-3"></div>
        </div>
        </div>
    </div>
  )
}

export default HomepageContent3
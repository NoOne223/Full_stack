import React from 'react'
import { faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareXTwitter, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays, faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ModalButton from '../buttons/ModalButton';

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
            <h2 className="sub-title mb-6">Đóng góp và phản hồi</h2>
            <div>
                <h3 className='text-2xl'>Đánh giá</h3>
                <p>
                    Từng đánh giá công tâm của quý khách đều có thể giúp cửa hàng của em phát triển hơn. Do đó xin mọi người hãy để lại đánh giá thật lòng nhất giúp em.
                </p>
                <ModalButton modalId='' className='bg-secondary text-white rounded-full mt-3'>Đánh giá</ModalButton>
            </div>
            <div className='mt-6'>
                <h3 className='text-2xl'>Phản hồi</h3>
                <p>
                Nếu quý khách chưa hài lòng về sản phẩm, thái độ phục vụ xin hãy để lại phản hồi để cửa hàng xử lí.
                </p>
                <ModalButton modalId='' className='bg-secondary text-white rounded-full mt-3'>Phản hồi</ModalButton>
            </div>
            <div className="bg-secondary absolute bottom-0 right-0 h-40 w-3"></div>
        </div>
        </div>
    </div>
  )
}

export default HomepageContent3
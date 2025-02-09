'use client'
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import UploadImage from '../uploadfile/UploadImage';
import PrimaryButton from '../buttons/PrimaryButton';

const TabContent = () => {
  return (
    <TabGroup className='container mx-auto p-3 min-h-[50vh]'>
      <TabList className='grid grid-cols-3 gap-5 mb-10'>
        <Tab
          className={({ selected }) =>
            `bg-black hover:shadow-emerald-500/50 hover:text-emerald-500 focus:outline-none py-5 w-full rounded-lg shadow-custom font-bold transition-all duration-300 ease-in-out ${
              selected ? "shadow-emerald-500/50 text-emerald-500 z-10" : "z-0"
            }`
          }
        >
          Giờ hoạt động
        </Tab>
        <Tab
          className={({ selected }) =>
            `bg-black hover:shadow-purple-500/50 hover:text-purple-500 focus:outline-none py-5 w-full rounded-lg shadow-custom font-bold transition-all duration-300 ease-in-out ${
              selected ? "shadow-purple-500/50 text-purple-500 z-10" : "z-0"
            }`
          }
        >
          Liên hệ
        </Tab>
        <Tab
          className={({ selected }) =>
            `bg-black hover:shadow-amber-500/50 hover:text-amber-500 focus:outline-none py-5 w-full rounded-lg shadow-custom font-bold transition-all duration-300 ease-in-out ${
              selected ? "shadow-amber-500/50 text-amber-500 z-10" : "z-0"
            }`
          }
        >
          Góp ý
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <h2 className='uppercase font-bold text-5xl mb-3'>Giờ hoạt động</h2>
          <p className='mb-3'>Chúng tôi mở cửa lúc 16:00 và đóng cửa lúc 23:00 từ Thứ 2 đến Chủ Nhật</p>
          <p className='mb-3'>Ngoài ra sẽ có các hoạt động :</p>
          <ul className='list-disc pl-5 leading-10 mb-3'>
            <li>Thứ 2-4-6 : mở state tại tầng 3 từ 19:00 - 21:00 cho các bạn muốn thể hiện giọng ca của mình.</li>
            <li>Thứ 3-5 : sẽ có các mini game trúng thưởng tại tầng 3.  Phần thưởng có hạn nhưng rất hấp dẫn.</li>
            <li>Thứ 7-CN : sẽ có các ưu đãi dành cho các cặp đôi và các nhóm đặt bàn trước hoặc tổng giá trị bill từ 200.000đ.</li>
            <li>Ngoài ra những ngày đặc biệt như ngày lễ sẽ được mở tất cả các hoạt động cho mọi người giải trí.</li>
          </ul>
        </TabPanel>
        <TabPanel className='flex flex-wrap gap-5'>
          <div className='w-[45%] flex-initial'>
            <h2 className='uppercase font-bold text-5xl mb-3'>Liên hệ</h2>
            <div className='flex gap-x-4'>
              <FontAwesomeIcon className='mt-2' icon={faPhoneVolume} />
              <div>
                <Link href='tel:0123456789'>
                  <p>012 345 6789</p>
                </Link>
                <Link href='tel:0123456789'>
                  <p>012 345 6789</p>
                </Link>
              </div>
            </div>
            <Link className='flex gap-x-4 items-center mt-3' href='mailto:namle392001@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>namle392001@gmail.com</p>
            </Link>
          </div>
          <div className='w-[45%] flex-initial'>
            <h2 className='uppercase font-bold text-5xl mb-3'>Địa chỉ</h2>
            <div className='flex gap-x-4 mt-3'>
              <FontAwesomeIcon className='mt-2' icon={faLocationDot} />
              <p>123 Trần Hưng Đạo, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
          <div className='w-[45%] flex-auto'>
            <h2 className='uppercase font-bold text-5xl mb-3'>Xin bạn 1 follow tại</h2>
            <div>
              <Link className='text-3xl me-3' href='' target='blank' title='Facebook'>
                <FontAwesomeIcon icon={faSquareFacebook} />
              </Link>
              <Link className='text-3xl me-3' href='' target='blank' title='Instagram'>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link className='text-3xl me-3' href='' target='blank' title='Twitter'>
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link className='text-3xl' href='' target='blank' title='Youtube'>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className='uppercase font-bold text-5xl mb-3'>Hòm góp ý</h2>
          <form>
            <textarea rows={5} className='w-full text-black p-2'></textarea>
            <UploadImage />
            <PrimaryButton className='shadow-red-500 mt-5 shadow-custom hover:bg-red-500'>Gửi</PrimaryButton>
          </form>
          <p className='mt-3'>
            <span className='text-yellow-500 italic'>* Lưu ý :</span> mọi phản hồi đều phải được gửi không quá 36h kể từ lúc sử dụng dịch tại <strong className='italic uppercase text-2xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>Hi Bar</strong>, 
            nếu có các vấn đề về vấn đề bill hoặc đặt bàn xin hãy cung cấp hình ảnh để chúng tôi xác thực ! Xin cảm ơn.
          </p>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}

export default TabContent
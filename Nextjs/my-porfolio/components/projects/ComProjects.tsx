'use client'
import React, { Fragment } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import './project.css'
import Link from 'next/link'

const ComProjects = () => {
  return (
    <div className='container mx-auto p-3'>
      <TabGroup>
        <TabList className='flex justify-center gap-5'>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={`${selected ? 'active' : ''} focus:outline-none tab-button`}>Dự án công ty</button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={`${selected ? 'active' : ''} focus:outline-none tab-button`}>Dự án cá nhân</button>
            )}
          </Tab>
        </TabList>
        <TabPanels className='mt-16'>
          <TabPanel>
            <div className='flex justify-center'>
              <div className='py-3 px-5 border-r-2 border-black max-w-sm w-full'>
                <h3 className='text-center text-4xl font-bold uppercase'>DFM Infotech</h3>
                <div className='mt-3'>
                  <h4 className='font-bold'>Mô tả dự án</h4>
                  <p>
                    Đây là trang web giới thiệu các lĩnh vực của công ty DFM.
                  </p>
                </div>
                <div className='mt-3'>
                  <h4 className='font-bold'>Công việc chính</h4>
                  <p>
                    Xây dựng layout trang web.
                  </p>
                </div>
                <div className='mt-3'>
                  <h4 className='font-bold'>Công nghệ được sử dụng</h4>
                  <p>HTML, CSS, Jquery, Boostrap</p>
                </div>
                <div className='text-center'>
                  <Link target='blank' className='tab-button mt-3' href="https://dfm-infotech.com">Xem trang web</Link>
                </div>
              </div>
              <div className='p-3 px-5 border-r-2 border-black max-w-sm w-full'>
                <h3 className='text-center text-4xl font-bold uppercase'>DFM IoT</h3>
                <div className='mt-3'>
                  <h4 className='font-bold'>Mô tả dự án</h4>
                  <p>
                    Đây là trang web giới thiệu các thiết bị công nghệ thuộc lĩnh vực IoT của công ty DFM.
                  </p>
                </div>
                <div className='mt-3'>
                  <h4 className='font-bold'>Công việc chính</h4>
                  <p>
                    Chuyển đổi thiết kế từ wordpress và xây dựng layout.
                  </p>
                </div>
                <div className='mt-3'>
                  <h4 className='font-bold'>Công nghệ được sử dụng</h4>
                  <p>HTML, CSS, Jquery, Boostrap</p>
                </div>
                <div className='text-center'>
                  <Link target='blank' className='tab-button mt-3' href="https://dfm-iot.com">Xem trang web</Link>
                </div>
              </div>
              <div className='p-3 px-5 max-w-sm w-full'>
                <h3 className='text-center text-4xl font-bold uppercase'>Albasoten</h3>
                <div className='mt-3'>
                  <h4 className='font-bold'>Mô tả dự án</h4>
                  <p>
                    Trang web dùng để giới thiệu về loại hình nhạc cổ điển của Pháp.
                  </p>
                </div>
                <div className='mt-3'>
                  <h4 className='font-bold'>Công việc chính</h4>
                  <p>
                    Xây dựng layout trang web.
                  </p>
                </div>
                <div className='mt-3'>
                  <h4 className='font-bold'>Công nghệ được sử dụng</h4>
                  <p>HTML, CSS, Jquery, Boostrap</p>
                </div>
                <div className='text-center'>
                  <Link target='blank' className='tab-button mt-3' href="https://albasoten.com">Xem trang web</Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

export default ComProjects

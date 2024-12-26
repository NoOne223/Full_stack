import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../app/globals.css'
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import TemplateTagButton from '@/components/Templatecontent/TemplateTagButton';
import TemplateContent from '@/components/Templatecontent/TemplateContent';

export default function Templates() {
  return (
    <>
      <Head>
        <title>Templates page</title>
        <meta name="description" content="This is sign in page" />
      </Head>
      <Sidebar />
      <section id='section1'>
          <Image className='max-h-screen h-full w-full object-cover' src='/images/template-banner.jpg' width={500} height={500} alt='Banner'/>
          <div className='absolute bg-color-1 m-auto top-0 bottom-0 left-0 right-0 w-full h-fit py-5'>
            <div className='text-white text-center max-w-6xl mx-auto'>
              <h2 className='text-4xl uppercase font-extrabold'>Crafting diverse templates tailored to elevate your website</h2>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic soluta qui! Porro accusamus numquam omnis illum facilis voluptates quidem sed voluptatem dolorum? Atque sunt explicabo, et modi maxime beatae?</p>
            </div>
          </div>
      </section>
      <div>
      <TemplateTagButton />
      <TemplateContent />
      </div>
      <Footer />
    </>
  );
}

import SecondaryButton from '@/components/Button/SecondaryButton';
import Sidebar from '@/components/Sidebar/Sidebar';
import type { Metadata } from 'next'
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'This is homepage',
}
export default function Home() {
  return (
    <>
      <Sidebar />
      <section className='min-h-screen flex flex-col justify-center' id='section1'>
        <div className='w-full h-full flex flex-col justify-center items-center text-center gap-y-14'>
          <Image className='' src='/images/logo.png' width={500} height={500} alt='Logo page'/>
          <h1 className='uppercase max-w-6xl text-4xl font-extrabold text-color-2'>Everything you need to build, design, and manage your website effortlessly</h1>
          <SecondaryButton>start exploring</SecondaryButton>
        </div>
      </section>

      <section className='my-16' id='section2'>
        <div className='container mx-auto p-[10px] flex items-center'>
          <Image src='/images/building.jpg' width={500} height={500} alt='Establish'/>
          <div className='p-5'>
            <h2 className='font-extrabold text-4xl uppercase text-color-2'>Establish</h2>
            <ul>
              <li className='my-3'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem hic amet ducimus eveniet, fugiat, saepe voluptate enim culpa officia consequatur 
                  pariatur minus sunt at vero exercitationem sit quos repellat.
                </p>
              </li>
              <li className='my-3'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem hic amet ducimus eveniet, fugiat, saepe voluptate enim culpa officia consequatur 
                  pariatur minus sunt at vero exercitationem sit quos repellat.
                </p>
              </li>
              <li className='my-3'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem hic amet ducimus eveniet, fugiat, saepe voluptate enim culpa officia consequatur 
                  pariatur minus sunt at vero exercitationem sit quos repellat.
                </p>
              </li>
              <li className='my-3'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem hic amet ducimus eveniet, fugiat, saepe voluptate enim culpa officia consequatur 
                  pariatur minus sunt at vero exercitationem sit quos repellat.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='my-16' id='section3'>
        <div className='container mx-auto p-[10px] min-h-[500px] flex justify-center'>
          <Image className='h-auto object-contain' src='/images/establish.jpg' width={500} height={500} alt='Services'/>
          <div className='w-[500px] relative'>
            <div className='bg-color-2 text-white w-full absolute bottom-0 p-5 -left-10'>
              <h2 className='font-extrabold text-4xl uppercase'>Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, itaque dolorem! Nesciunt, neque assumenda quis iusto tempore iste voluptatum aut, 
                laboriosam corporis voluptates veritatis voluptate suscipit a aliquam cum dolore.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto p-[10px] flex gap-x-6'>
          <div className='max-w-[25%] p-6 rounded-xl shadow-only-left text-center'>
            <Image className='h-20 object-contain' src='/images/001-template.png' width={500} height={500} alt='Icon'/>
            <h2 className='font-bold text-2xl my-4'>Modern Templates</h2>
          </div>
          <div className='max-w-[25%] p-6 rounded-xl shadow-only-left text-center'>
            <Image className='h-20 object-contain' src='/images/002-internet.png' width={500} height={500} alt='Icon'/>
            <h2 className='font-bold text-2xl my-4'>Check and provide domain name</h2>
          </div>
          <div className='max-w-[25%] p-6 rounded-xl shadow-only-left text-center'>
            <Image className='h-20 object-contain' src='/images/003-seo.png' width={500} height={500} alt='Icon'/>
            <h2 className='font-bold text-2xl my-4'>Ensure SEO optimization</h2>
          </div>
          <div className='max-w-[25%] p-6 rounded-xl shadow-only-left text-center'>
            <Image className='h-20 object-contain' src='/images/004-customer-service.png' width={500} height={500} alt='Icon'/>
            <h2 className='font-bold text-2xl my-4'>24/7 customer support</h2>
          </div>
        </div>
      </section>

      <section id='section4'>
        <div className='container mx-auto p-[10px]'>
          <div className='text-center'>
            <h2 className='text-4xl uppercase font-extrabold text-color-2'>Compliment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, praesentium explicabo aut dolorem ad omnis, autem illum natus voluptatum quis eaque sint sed ipsa exercitationem eligendi quae blanditiis, dolores laudantium?
            </p>
          </div>
          <div className='flex gap-x-6 mt-10'>
            <div className='max-w-[25%] p-6 rounded-xl shadow-only-left text-justify'>
              <Image className='h-20 object-contain' src='/images/hacker.png' width={500} height={500} alt='Icon'/>
              <p className='my-5'>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, molestias repudiandae veniam eos omnis, iusto laudantium assumenda eius, nostrum natus 
                facere aperiam officia esse error consequatur recusandae consequuntur architecto ipsum!"
              </p>
            </div>
            <div className='max-w-[25%] p-6 rounded-xl shadow-only-left text-justify'>
              <Image className='h-20 object-contain' src='/images/hacker.png' width={500} height={500} alt='Icon'/>
              <p className='my-5'>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, molestias repudiandae veniam eos omnis, iusto laudantium assumenda eius, nostrum natus 
                facere aperiam officia esse error consequatur recusandae consequuntur architecto ipsum!"
              </p>
            </div>
            <div className='max-w-[25%] p-6 rounded-xl shadow-only-left text-justify'>
              <Image className='h-20 object-contain' src='/images/hacker.png' width={500} height={500} alt='Icon'/>
              <p className='my-5'>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, molestias repudiandae veniam eos omnis, iusto laudantium assumenda eius, nostrum natus 
                facere aperiam officia esse error consequatur recusandae consequuntur architecto ipsum!"
              </p>
            </div>
            <div className='max-w-[25%] p-6 rounded-xl shadow-only-left text-justify'>
              <Image className='h-20 object-contain' src='/images/hacker.png' width={500} height={500} alt='Icon'/>
              <p className='my-5'>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, molestias repudiandae veniam eos omnis, iusto laudantium assumenda eius, nostrum natus 
                facere aperiam officia esse error consequatur recusandae consequuntur architecto ipsum!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

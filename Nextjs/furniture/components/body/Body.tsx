import React from 'react'
import Image from 'next/image'
import './body.css'
import LinkButton from '../button/LinkButton'

const Body = () => {
  return (
    <div className='mt-[150px]'>
        <section className='relative h-[70vh]'>
            <div className='container mx-auto p-[10px]'>
                <h1 className='uppercase text-title text-5xl text-center font-bold'>We bring you quality home furnishings and the finest designs for your home</h1>
                <div className='flex gap-x-5 mt-40'>
                    <Image className='w-[24%] h-[300px] object-cover rounded-xl' src='/image/img1.jpg' alt='Home 1' width={500} height={500} />
                    <Image className='w-[24%] h-[300px] object-cover rounded-xl' src='/image/img2.jpg' alt='Home 2' width={500} height={500} />
                    <Image className='w-[24%] h-[300px] object-cover rounded-xl' src='/image/img3.jpg' alt='Home 3' width={500} height={500} />
                    <Image className='w-[24%] h-[300px] object-cover rounded-xl' src='/image/banner.jpg' alt='Home 4' width={500} height={500} />
                </div>
            </div>
            <div className='w-full absolute h-52 bg-header-color bottom-0 -z-[1]'></div>
        </section>
        <section>
            <div className='container mx-auto p-[10px] mt-16'>
                <p className='mb-5'>
                    We exist and are committed to serving our customers based on the essential principles and standards that we have carefully established 
                    and uphold :
                </p>
                <div className='grid grid-cols-2 gap-7'>
                    <div className='p-3'>
                        <h2 className='font-bold text-3xl border-t-4 w-fit border-title pt-2 text-title'>01</h2>
                        <h4 className='font-bold'>Quality of products</h4>
                        <p className='text-justify my-2'>
                        Our furniture products, including chairs, tables, and lamps, are designed with a strong focus on quality and durability. Each piece is crafted from 
                        premium materials to ensure both style and longevity, enhancing any interior space. We carefully select fabrics and woods that resist wear, making our 
                        furniture a reliable and stylish addition to your home.
                        </p>
                    </div>
                    <div className='p-3'>
                        <h2 className='font-bold text-3xl border-t-4 w-fit border-title pt-2 text-title'>02</h2>
                        <h4 className='font-bold'>Trust of customer</h4>
                        <p className='text-justify my-2'>
                        Building customer trust is key to success. Companies must deliver quality, be transparent, and offer excellent customer service. By meeting 
                        expectations and addressing concerns promptly, trust is earned, leading to lasting relationships.
                        </p>
                    </div>
                    <div className='uppercase col-span-2 text-center'>
                        <p className='text-gray-400 text-4xl'>Our top</p>
                        <h4 className='font-black text-7xl text-title'>priorities</h4>
                    </div>
                    <div className='p-3'>
                        <h2 className='font-bold text-3xl border-t-4 w-fit border-title pt-2 text-title'>03</h2>
                        <h4 className='font-bold'>Innovation everyday</h4>
                        <p className='text-justify my-2'>
                        Every day offers opportunities for innovation and growth. Embracing change is key to progress, whether in technology, business, or daily life. 
                        Small, consistent changes lead to significant improvements and help us adapt and solve problems.
                        </p>
                    </div>
                    <div className='p-3'>
                        <h2 className='font-bold text-3xl border-t-4 w-fit border-title pt-2 text-title'>04</h2>
                        <h4 className='font-bold'>Amenities of designs</h4>
                        <p className='text-justify my-2'>
                        I focus on creating a comfortable and relaxing space in my home by using natural light and soft, neutral colors. Comfortable furniture, like cozy 
                        sofas and rugs, adds warmth, while indoor plants bring a refreshing touch. The layout is simple and practical, allowing easy movement. This combination 
                        helps create a peaceful and inviting atmosphere.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='mt-16 bg-image-1 relative h-screen w-full'>
                <div className='bg-white p-6 absolute max-w-[500px] max-h-[300px] rounded-xl top-0 bottom-0 my-auto right-[185px] shadow-side'>
                    <h4 className='font-bold'>Want a new space?</h4>
                    <p className='my-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem facilis voluptas labore assumenda, omnis aut est minima ratione dignissimos 
                        culpa quia pariatur vel doloribus odit tenetur dolorem quas sapiente!
                    </p>
                    <LinkButton 
                        className='text-white bg-black border-2 border-black py-2 px-6 hover:bg-white hover:text-black' 
                        href='#Contact'>
                        Contact us
                    </LinkButton>
                </div>
            </div>
        </section>
        <section>
            <div className='container mx-auto p-[10px]'>
                <div className='flex mt-16 justify-between gap-x-5'>
                    <div className='text-center rounded-xl shadow-bottom w-1/4 p-3 min-h-64 flex flex-col justify-center'>
                        <i className="fa-solid fa-phone-volume text-4xl text-title"></i>
                        <h4 className='font-bold text-4xl my-2'>200+</h4>
                        <p>
                            Advise calls per day
                        </p>
                    </div>
                    <div className='text-center rounded-xl shadow-bottom w-1/4 p-3 min-h-64 flex flex-col justify-center'>
                        <i className="fa-regular fa-comment-dots text-4xl text-title"></i>
                        <h4 className='font-bold text-4xl my-2'>1,500+</h4>
                        <p>
                            Good comments
                        </p>
                    </div>
                    <div className='text-center rounded-xl shadow-bottom w-1/4 p-3 min-h-64 flex flex-col justify-center'>
                        <div>
                            <i className="fa-regular fa-star text-title"></i>
                            <i className="fa-regular fa-star text-title"></i>
                            <i className="fa-solid fa-star text-4xl text-title"></i>
                            <i className="fa-regular fa-star text-title"></i>
                            <i className="fa-regular fa-star text-title"></i>
                        </div>
                        <h4 className='font-bold text-4xl my-2'>30,000+</h4>
                        <p>
                            Positive votes
                        </p>
                    </div>
                    <div className='text-center rounded-xl shadow-bottom w-1/4 p-3 min-h-64 flex flex-col justify-center'>
                        <i className="fa-solid fa-crown text-4xl text-title"></i>
                        <h4 className='font-bold text-4xl my-2'>500+</h4>
                        <p>
                            Loyal customers
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Body

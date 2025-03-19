import React from 'react'
import Image from "next/image";

const HomepageContent2 = () => {
  return (
    <div className="container mx-auto p-3">
        <div className="flex">
        <div className="w-1/2 grid grid-cols-2 gap-5">
            <div className="border border-transparent bg-thirdary text-primary p-5">
            <h2 className="mb-4 text-3xl">Top thịnh hành</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ad nostrum vitae, delectus rem beatae aperiam facilis animi quod molestiae impedit at 
                expedita nam, eum, illo natus ea explicabo? Architecto?
            </p>
            </div>
            <div className="border border-transparent bg-white text-primary p-5">
            <h2 className="mb-4 text-3xl">Phù hợp</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi commodi nihil enim harum quam nisi aut magni ut aliquid nobis 
                officia maiores molestiae recusandae, natus nostrum tempore fugit, ducimus dicta.
            </p>
            </div>
            <div className="border border-transparent bg-white text-primary p-5">
            <h2 className="mb-4 text-3xl">Xinh đẹp</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi commodi nihil enim harum quam nisi aut magni ut aliquid nobis 
                officia maiores molestiae recusandae, natus nostrum tempore fugit, ducimus dicta.
            </p>
            </div>
            <div className="border border-transparent bg-thirdary text-primary p-5 content-center">
            <h2 className="text-6xl capitalize">Trang thời trang hiện đại</h2>
            </div>
        </div>
        <div className="w-1/2 content-center">
            <Image className="m-auto" src='/images/logo.png' width={500} height={500} alt="Modal"/>
        </div>
        </div>
    </div>
  )
}

export default HomepageContent2
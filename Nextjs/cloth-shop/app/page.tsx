import Carousel from "@/components/carousel/Carousel";
import Header from "@/components/header/Header";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Shop clothes',
  description: 'This is homepage'
}
export default function Home() {
  return (
   <>
    <Header />
    <main>
      <section>
        <Carousel />
      </section>
      <section className="mt-16">
        <div className="container mx-auto p-3">
          <h2 className="title text-end mb-9">Sự lựa chọn hoàn hảo cho <br></br>tủ đồ của bạn</h2>
          <div className="flex">
            <div className="w-1/2 text-end relative">
              <div className="flex flex-col justify-center gap-y-10 absolute top-0 -right-[110px] h-full">
                <div>
                  <h3 className="sub-title">1</h3>
                  <hr className="my-5 text-thirdary border-2 w-3/4 ml-auto"></hr>
                  <h3 className="sub-title capitalize">Dành cho nam</h3>
                  <hr className="my-5 text-thirdary border-2 w-1/2 ml-auto"></hr>
                </div>
                <p className="text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores numquam magni minus qui explicabo repellendus, accusamus nesciunt voluptatum deserunt modi eum rerum fugiat quod eius enim! Doloribus, reiciendis adipisci.
                </p>
                <Link className="border-2 border-transparent w-fit ml-auto p-2 rounded-md hover:text-white hover:bg-thirdary" href=''>
                  Mua ngay
                  <FontAwesomeIcon className="ms-1.5" icon={faBagShopping} />
                </Link>
              </div>
            </div>
            <div className="w-1/2">
              <Image className="w-full h-[700px] object-top object-cover rounded-2xl" src='/images/for-men.png' width={500} height={800} alt="content image"/>
            </div>
          </div>
          <div className="flex mt-16">
            <div className="w-1/2">
              <Image className="w-full h-[700px] object-top object-cover rounded-2xl" src='/images/for-women.png' width={500} height={800} alt="content image"/>
            </div>
            <div className="w-1/2 text-start relative">
              <div className="flex flex-col justify-center gap-y-10 absolute top-0 -left-[110px] h-full">
                <div>
                  <h3 className="sub-title">1</h3>
                  <hr className="my-5 text-thirdary border-2 w-3/4 mr-auto"></hr>
                  <h3 className="sub-title capitalize">Dành cho nữ</h3>
                  <hr className="my-5 text-thirdary border-2 w-1/2 mr-auto"></hr>
                </div>
                <p className="text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores numquam magni minus qui explicabo repellendus, accusamus nesciunt voluptatum deserunt modi eum rerum fugiat quod eius enim! Doloribus, reiciendis adipisci.
                </p>
                <Link className="border-2 border-transparent w-fit mr-auto p-2 rounded-md hover:text-white hover:bg-thirdary" href=''>
                  Mua ngay
                  <FontAwesomeIcon className="ms-1.5" icon={faBagShopping} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
   </>
  );
}
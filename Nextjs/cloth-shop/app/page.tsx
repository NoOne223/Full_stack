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
          <h2 className="title text-end max-w-[750px] ml-auto mb-9">The perfect addition to your closet</h2>
          <div className="flex">
            <div className="w-1/2 text-end">
              <h3 className="sub-title">1. For men</h3>
              <hr className="my-5"></hr>
              <p className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores numquam magni minus qui explicabo repellendus, accusamus nesciunt voluptatum deserunt modi eum rerum fugiat quod eius enim! Doloribus, reiciendis adipisci.
              </p>
              <Link href=''>
                Mua ngay
                <FontAwesomeIcon className="ms-1.5" icon={faBagShopping} />
              </Link>
            </div>
            <div className="w-1/2">
              <Image className="w-full h-[700px] object-top object-cover rounded-2xl" src='/images/for-men.png' width={500} height={800} alt="content image"/>
            </div>
          </div>
        </div>
      </section>
    </main>
   </>
  );
}
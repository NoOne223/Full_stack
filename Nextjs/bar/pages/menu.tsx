import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "/app/globals.css"
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";


export default function Menu(){
    const [meals, setMeals] = useState
    return (
        <>
            <Head>
                <title>Thực đơn</title>
                <meta name="description" content="Trang thực đơn." />
            </Head>
            <Header />
            <main>
                <section className="mt-16">
                    <div className="container mx-auto p-3">
                        <h2 className='uppercase font-bold text-5xl italic mb-3'>Menu đồ ăn !</h2>
                        <div className="grid grid-cols-4 gap-5">
                            <div>
                                <Image className="max-h-60 w-full rounded-xl" src='/images/cari-beef.jpeg' width={500} height={500} alt="Menu image"/>
                                <div className="p-3 flex items-center justify-between">
                                    <h3 className="text-3xl font-semibold uppercase">Cà ri bò</h3>
                                    <p className="italic">75.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "/app/globals.css"
import Head from "next/head";


export default function Menu(){
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
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
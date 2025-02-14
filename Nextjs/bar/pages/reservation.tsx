import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Head from "next/head";
import '/app/globals.css'
import CustomRadio from "@/components/form/CustomRadio";
import CustomSelect from "@/components/form/CustomSelect";
import TimeSelect from "@/components/form/TimeSelect";

export default function Reservation(){
    const purposeOptions = ['Thư giãn', 'Hẹn hò', 'Tiệc tùng'];
    return (
        <>
            <Head>
                <title>Đặt bàn</title>
                <meta name="description" content="Trang đặt bàn." />
            </Head>
            <Header />
            <main>
                <section className="mt-16">
                    <div className="container mx-auto p-3">
                        <form className="border border-white rounded-md p-5 max-w-5xl w-full mx-auto">
                            <div className="flex items-center">
                                <div className="flex gap-x-5 flex-auto">
                                    <label><span className="text-red-600">*</span> Bạn muốn đặt bàn mấy người?</label>
                                    <CustomRadio />
                                </div>
                                <div className="flex gap-x-5 w-fit flex-auto">
                                    <label>Mục đích:</label>
                                    <CustomSelect className="max-w-44 w-full" options={purposeOptions}/>
                                </div>
                            </div>
                            <div>
                                <TimeSelect />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "/app/globals.css"
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

type Meals = {
    id: number;
    name: string;
    price: string;
    image: string;
}

export default function Menu(){
    const [meals, setMeals] = useState<Meals[]>([]);

    useEffect(() => {
        fetch("/data/mealdata.json")
        .then((res) => res.json())
        .then((data) => {
            console.log("Data: ", data);
            if(Array.isArray(data)){
                setMeals(data);
            } else if (data.meals && Array.isArray(data.meals)){
                setMeals(data.meals);
            } else {
                console.error("Dữ liệu không hợp lệ:", data); 
            }
        })
        .catch ((error) => console.error("Lỗi khi lấy dữ liệu:", error));
    }, [])
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
                            {meals.map((meals) => 
                                <div key={meals.id}>
                                    <Image className="max-h-60 w-full rounded-xl" src={meals.image} width={500} height={500} alt="{meals.name}"/>
                                    <div className="p-3 flex items-center justify-between">
                                        <h3 className="text-3xl font-semibold uppercase">{meals.name}</h3>
                                        <p className="italic">{meals.price}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
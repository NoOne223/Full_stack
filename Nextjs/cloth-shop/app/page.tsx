import Carousel from "@/components/carousel/Carousel";
import Header from "@/components/header/Header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Shop clothes',
  description: 'This is homepage'
}
export default function Home() {
  return (
   <>
    <Header />
    <main>
      <section className="min-h-screen">
        <Carousel />
      </section>
    </main>
   </>
  );
}

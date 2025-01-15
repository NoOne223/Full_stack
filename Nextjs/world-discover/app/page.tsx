import BookingArea from "@/components/booking-area/BookingArea";
import FaqAccordion from "@/components/faq/FaqAccordion";
import Footer from "@/components/footer/Footer";
import Parallax from "@/components/parallax/Parallax";
import Slide from "@/components/slide/Slide";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Homepage',
}
export default function Home() {
  return (
    <>
      <Parallax />
      <main>
        <section className="container mx-auto p-3 min-h-[50vh] content-center">
          <h2 className="text-secondary-color text-6xl font-bold mb-5 text-center">This is title</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eius at nemo, soluta ducimus modi nostrum mollitia reprehenderit hic ullam quod, laboriosam autem laborum cupiditate corporis. Tempore quisquam ipsum est.</p>
          <BookingArea />
        </section>
        <section className="container mx-auto p-3 mt-5">
          <h2 className="text-secondary-color text-6xl font-bold mb-5">This is title</h2>
          <Slide />
        </section>
        <section className="container mx-auto p-3">
          <h2 className="text-secondary-color text-6xl font-bold mb-5">This is title</h2>
          <div className="flex gap-5">
            <FaqAccordion />
            <div className="w-1/2">
              <Image className="w-full max-h-[350px]" src='/images/faq.jpg' width={500} height={500} alt="FaQ image"/>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

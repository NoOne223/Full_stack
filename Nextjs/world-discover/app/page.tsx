import BookingArea from "@/components/booking-area/BookingArea";
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
        <section className="mt-14 container mx-auto p-3">
          <div>
            <h2 className="text-secondary-color text-6xl font-bold mb-5">This is title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, architecto pariatur. Sed reprehenderit aut, dolor laborum dolore fugiat incidunt quisquam dolorem ut 
              doloribus quaerat esse deserunt cum at, deleniti exercitationem.
            </p>
          </div>
          <div className="flex gap-x-3">
            <div></div>
          </div>
        </section>
        <section className="container mx-auto p-3 min-h-[50vh] content-center">
          <h2 className="text-secondary-color text-6xl font-bold mb-5 text-center">This is title</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eius at nemo, soluta ducimus modi nostrum mollitia reprehenderit hic ullam quod, laboriosam autem laborum cupiditate corporis. Tempore quisquam ipsum est.</p>
          <BookingArea />
        </section>
        <section className="container mx-auto p-3 mt-5">
          <div className="flex gap-x-5">
            <div className="w-1/2">
              <h2 className="text-secondary-color text-6xl font-bold mb-5">This is title</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro unde delectus aliquid deleniti temporibus consequuntur laboriosam odio! Eos aspernatur debitis atque, rem illum voluptates laborum sunt nulla accusamus dolorum dolorem?</p>
            </div>
            <div className="w-1/2">
              <Image className="w-full max-h-[350px]" src='/images/great.jpg' width={500} height={300} alt="Example image"/>
            </div>
          </div>
          <Slide />
        </section>
      </main>
    </>
  );
}

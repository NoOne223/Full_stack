import BookingArea from "@/components/booking-area/BookingArea";
import CardContent from "@/components/card/CardContent";
import Parallax from "@/components/parallax/Parallax";
import { Metadata } from "next";

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
            <h2 className="text-secondary-color text-4xl font-bold mb-5">This is title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, architecto pariatur. Sed reprehenderit aut, dolor laborum dolore fugiat incidunt quisquam dolorem ut 
              doloribus quaerat esse deserunt cum at, deleniti exercitationem.
            </p>
          </div>
          <div className="flex gap-x-3">
            <CardContent title="Card title 1" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias amet itaque blanditiis hic mollitia quaerat non ad quia? Assumenda reprehenderit sapiente itaque ducimus." />
            <CardContent title="Card title 2" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias amet itaque blanditiis hic mollitia quaerat non ad quia? Assumenda reprehenderit sapiente itaque ducimus." />
            <CardContent title="Card title 3" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias amet itaque blanditiis hic mollitia quaerat non ad quia? Assumenda reprehenderit sapiente itaque ducimus." />
            <CardContent title="Card title 4" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias amet itaque blanditiis hic mollitia quaerat non ad quia? Assumenda reprehenderit sapiente itaque ducimus." /> 
          </div>
        </section>
        <section className="container mx-auto p-3 min-h-[50vh] content-center">
          <h2 className="text-secondary-color text-4xl font-bold mb-5 text-center">This is title</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eius at nemo, soluta ducimus modi nostrum mollitia reprehenderit hic ullam quod, laboriosam autem laborum cupiditate corporis. Tempore quisquam ipsum est.</p>
          <BookingArea />
        </section>
      </main>
    </>
  );
}

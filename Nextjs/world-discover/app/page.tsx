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
          <div className="">
              <div>
                <h2 className="text-secondary-color text-4xl font-bold mb-5">This is title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, architecto pariatur. Sed reprehenderit aut, dolor laborum dolore fugiat incidunt quisquam dolorem ut 
                  doloribus quaerat esse deserunt cum at, deleniti exercitationem.
                </p>
              </div>
              <div>
                
              </div>
          </div>
        </section>
      </main>
    </>
  );
}

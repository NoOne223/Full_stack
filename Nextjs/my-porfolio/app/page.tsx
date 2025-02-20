import Content1 from "@/components/homepagecontent/Content1";
import Content2 from "@/components/homepagecontent/Content2";
import Info from "@/components/infomation/Info";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: 'My Portfolio',
  description: 'This is my portfolio',
}
export default function Home() {
  return (
    <>
      <main>
        <section>
          <Content1 />
        </section>
        <section className="mt-16">
          <Content2 />
        </section>
        <section className="mt-16">
          <Info />
        </section>
      </main>
    </>
  );
}

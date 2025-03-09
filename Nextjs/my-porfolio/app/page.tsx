import Contact from "@/components/contact/Contact";
import Experient from "@/components/experient/Experient";
import Skill from "@/components/experient/Skill";
import Content1 from "@/components/homepagecontent/Content1";
import Content2 from "@/components/homepagecontent/Content2";
import Info from "@/components/infomation/Info";
import ComProjects from "@/components/projects/ComProjects";
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
        <section id="info" className="mt-16">
          <Info />
        </section>
        <section id="skill" className="mt-16">
          <Experient />
          <Skill />
        </section>
        <section id="project" className="mt-16">
          <ComProjects />
        </section>
        <section id="contact" className="mt-16">
          <Contact />
        </section>
      </main>
    </>
  );
}

import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HomepageContent1 from "@/components/homepage/HomepageContent1";
import HomepageContent2 from "@/components/homepage/HomepageContent2";
import HomepageContent3 from "@/components/homepage/HomepageContent3";
import HomepageContent4 from "@/components/homepage/HomepageContent4";
import LoginModal from "@/components/modals/LoginModal";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Shop clothes',
  description: 'This is homepage'
}
export default function Home() {
  return (
   <>
    <Header />
    <main>
      <section>
        <Carousel />
      </section>
      <section className="mt-16">
        <HomepageContent1 />
      </section>
      <section className="mt-16 bg-primary">
        <HomepageContent2 />
      </section>
      <section className="mt-16">
        <HomepageContent3 />
      </section>
      <section className="mt-16">
        <HomepageContent4 />
      </section>
    </main>
    <Footer />
    <LoginModal />
   </>
  );
}
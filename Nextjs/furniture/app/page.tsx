import Body from '@/components/body/Body';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Metadata } from 'next'; //Import để thay đổi <title>

export const metadata: Metadata = {
  title: 'Homepage', //Thay đổi title theo từng page
  description: 'The official Homepage home page.', //Tối ưu SEO
  icons: {
    icon: '/favicon.png', //Thay đổi favicon theo từng page (nếu muốn)
  },
};

export default function Home() { //Sử dụng cho các trang chính
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

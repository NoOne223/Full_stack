import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Metadata } from 'next'; //Import để thay đổi <title>
import '../app/globals.css'

export const metadata: Metadata = {
  title: 'Homepage', //Thay đổi title theo từng page
  description: 'The official Homepage home page.', //Tối ưu SEO
  icons: {
    icon: '/favicon.png', //Thay đổi favicon theo từng page (nếu muốn)
  },
};

export default function Product() { //Sử dụng cho các trang chính
  return (
    <div>
      <Header />
        <div className='container mx-auto'>
            
        </div>
      <Footer />
    </div>
  );
}

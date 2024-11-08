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
      <section>
        <div className='container m-auto'>
          <h1 className='uppercase text-title font-bold'>"We bring you quality home furnishings and the finest designs for your home."</h1>
        </div>
      </section>
    </div>
  );
}

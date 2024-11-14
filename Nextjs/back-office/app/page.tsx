import LoginForm from "@/components/login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login BackOffice', //Thay đổi title theo từng page
  description: 'The official Homepage home page.', //Tối ưu SEO
  icons: {
    icon: '/favicon.png', //Thay đổi favicon theo từng page (nếu muốn)
  },
};

export default function Home() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

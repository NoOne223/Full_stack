"use client";
import { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import '../styles/globals.css'; // Đảm bảo đường dẫn chính xác
import LinkButton from "@/components/button/LinkButton";

export const metadata: Metadata = {
  title: 'Welcome to Back Office', // Thay đổi title theo từng page
  description: 'The official Homepage home page.', // Tối ưu SEO
  icons: {
    icon: '/favicon.png', // Thay đổi favicon theo từng page (nếu muốn)
  },
};

export default function Welcome() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name || "Guest"); // Lấy tên người dùng và cập nhật state, mặc định là "Guest"
      } catch (error) {
        console.error("Error parsing user data:", error);
        setUserName("Guest");
      }
    } else {
      setUserName("Guest");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bodybg">
      {/* Logo */}
      <Image className="h-[65px] object-contain" src='/image/BO-logo.png' width={200} height={200} alt="Logo" />

      {/* Welcome Message */}
      <h1 className="mt-8 text-4xl md:text-6xl font-bold text-darkcyan uppercase">
        Welcome to Back Office, {userName}!
      </h1>

      {/* Additional Information */}
      <p className="mt-4 text-lg text-gray-600">We're glad to have you back. Let's get to work!</p>

      {/* Example of some buttons */}
      <div className="mt-6 space-x-4">
        <LinkButton className="bg-button p-3 min-w-[150px] rounded-md hover:bg-darkcyan hover:text-lightblue" href="/Dashboard" >Go to dashboard</LinkButton>
      </div>
    </div>
  );
}

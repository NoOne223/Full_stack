"use client";
import { Metadata } from "next";
import Image from "next/image";
import React from 'react'
import '../styles/globals.css'; // Đảm bảo đường dẫn chính xác

export const metadata: Metadata = {
  title: 'Dashboard', // Thay đổi title theo từng page
  description: 'The official Homepage home page.', // Tối ưu SEO
  icons: {
    icon: '/favicon.png', // Thay đổi favicon theo từng page (nếu muốn)
  },
};

export default function Dashboard() {

  return (
    <div>
        <Image className="h-[65px] object-contain mx-auto" src='/image/BO-logo.png' width={500} height={500} alt="logo"/>
    </div>
  );
}

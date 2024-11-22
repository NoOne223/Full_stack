"use client";
import { Metadata } from "next";
import Image from "next/image";
import React from 'react'
import '../styles/globals.css';
import TabContent from "@/components/tabs/TabContent";

export const metadata: Metadata = {
  title: 'Dashboard', // Thay đổi title theo từng page
  description: 'The official Homepage home page.', // Tối ưu SEO
  icons: {
    icon: '/favicon.png', // Thay đổi favicon theo từng page (nếu muốn)
  },
};

export default function Dashboard() {

  const tabs = [
    { label: 'Home', content: <p>Welcome to Home</p> },
    { label: 'About', content: <p>About Us</p> },
    { label: 'Contact', content: <p>Contact Us</p> },
  ];

  return (
    <div className="relative">
      <Image className="h-[65px] object-contain mx-auto" src='/image/BO-logo.png' width={500} height={500} alt="logo"/>
      <div className="container mx-auto">
        <TabContent className="my-tabs" tabs={tabs}/>
      </div>
    </div>
  );
}

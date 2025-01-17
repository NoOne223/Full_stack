import Footer from "@/components/footer/Footer";
import React from 'react';
import Head from 'next/head';
import '../app/globals.css'
import Header from "@/components/header/Header";


export default function Flight() {
  return (
    <>
      <Head>
        <title>Flight Booking</title>
        <meta name="flight booking page" content="Welcome to my awesome website built with Next.js" />
      </Head>
      <Header />
      <main>
          
      </main>
      <Footer />
    </>
  );
}

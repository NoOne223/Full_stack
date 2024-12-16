import Header from '@/components/Header/Header';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'This is homepage',
}
export default function Home() {
  return (
    <>
     <Header />
    </>
  );
}

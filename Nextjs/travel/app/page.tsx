import Header from "@/components/header/Header";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Agent',
  description: 'This is homepage',
}

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

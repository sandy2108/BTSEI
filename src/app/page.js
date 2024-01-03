import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main className="bg-black min-h-screen "
    >
      <Navbar />
      <Hero />
      <ToastContainer />
    </main>
  );
}

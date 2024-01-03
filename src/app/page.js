import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';


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

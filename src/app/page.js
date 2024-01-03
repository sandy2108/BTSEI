import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';


export default function Home() {
  return (
    <main className="bg-black min-h-screen "
    >
      <Head>
        <Head>
          <title>$BTSEI</title>
          <meta name="description" content="No Team, No Roadmap, Just Satoshis Legacy" />
          <meta property="og:title" content="$BTSEI" />
          <meta property="og:description" content="No Team, No Roadmap, Just Satoshis Legacy" />
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/wizard-4fa3a.appspot.com/o/Logo.png?alt=media&token=724bdd4b-91af-45f8-abc9-4416f65c97e7" />
          <meta name="twitter:card" content="summary_large_image" />

        </Head>

      </Head>
      <Navbar />
      <Hero />
      <ToastContainer />
    </main>
  );
}

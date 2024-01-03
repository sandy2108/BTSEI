
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

export const metadata = {
  title: '$BTSEI',
  description: '“No team . No roadmap. Just Seitoshi legacy”',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/onepercent-63fd5.appspot.com/o/Logo.jpg?alt=media&token=2a7b87bb-2ed9-43a1-91cb-d99fba3dc994',
};


export default function Home() {
  return (
    <main className="bg-black min-h-screen "
    >
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} /> {/* Add OG image tag */}

        {/* Twitter Card metadata */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} /> {/* Add Twitter image tag */}
      </Head>

      <Navbar />
      <Hero />
      <ToastContainer />
    </main>
  );
}

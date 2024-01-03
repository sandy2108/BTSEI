import Head from 'next/head';
import './globals.css'
export const metadata = {
  title: '$BTSEI ',
  description: 'No Team, No Roadmap,Just Satoshis Legacy',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fcai-32252.appspot.com/o/Btc.png?alt=media&token=2fc0fbfb-8b8d-4b25-85c9-d776225015c6',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <body>{children}</body>
    </html>
  )
}

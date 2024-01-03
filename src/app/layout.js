import Head from 'next/head';
import './globals.css'
export const metadata = {
  title: '$BTSEI',
  description: 'No Team, No Roadmap, Just Satoshis Legacy',
  keywords: ['btsei', 'sei', 'Satoshis', 'Sei meme'],
  openGraph: {
    title: '$BTSEI',
    description: 'No Team, No Roadmap, Just Satoshis Legacy',
    image: 'https://firebasestorage.googleapis.com/v0/b/wizard-4fa3a.appspot.com/o/banner.png?alt=media&token=917e087f-4600-4fa0-8d6e-327072556156',
    card: 'summary_large_image',
    twitter: {
      card: 'summary_large_image',
      site: '@btsei_token', // Replace with your Twitter handle
      title: '$BTSEI',
      description: 'No Team, No Roadmap, Just Satoshis Legacy',
      image: 'https://firebasestorage.googleapis.com/v0/b/wizard-4fa3a.appspot.com/o/banner.png?alt=media&token=917e087f-4600-4fa0-8d6e-327072556156',
    },
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>{children}</body>
    </html>
  )
}

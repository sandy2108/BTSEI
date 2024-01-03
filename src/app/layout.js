import Head from 'next/head';
import './globals.css'
export const metadata = {
  title: '$BTSEI ',
  description: 'No Team, No Roadmap,Just Satoshis Legacy',
  keywords: ["btsei", "sei", "Satoshis", "Sei meme"],
  openGraph: {
    images: 'https://firebasestorage.googleapis.com/v0/b/gpuxdrops.appspot.com/o/banner.png?alt=media&token=dfb3c5d4-3817-45aa-a026-d7eaf14e6b23'
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>{children}</body>
    </html>
  )
}

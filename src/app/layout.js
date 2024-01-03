import Head from 'next/head';
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>{children}</body>
    </html>
  )
}

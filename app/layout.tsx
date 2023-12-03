import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Space from '@/nextcomponents/space'
import Navbar from '@/nextcomponents/navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zahaan Shapoorjee',
  description: 'Zahaan Shapoorjee Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Head>
      <body className={`${inter.className} bg-[#000000] overflow-y-scroll overflow-x-hidden `}>
        <Space/>
        <Navbar/>
        {children}</body>
    </html>
  )
}

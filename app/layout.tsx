import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Space from '@/nextcomponents/space'
import Navbar from '@/nextcomponents/navbar'

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
      <body className={`${inter.className} bg-[#000000] overflow-y-scroll overflow-x-hidden `}>
        <Space/>
        <Navbar/>
        {children}</body>
    </html>
  )
}

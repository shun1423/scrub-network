import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GNB from '@/components/layouts/gnb'
import Footer from '@/components/layouts/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dental Project App',
  description: 'Dental Recruting Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GNB />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}

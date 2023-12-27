import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AuthProvider from'./providers/providers';

export const metadata: Metadata = {
  title: 'E-Commerce Shop',
  description: 'Created By Minhaj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

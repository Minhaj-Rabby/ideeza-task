'use client'
import Image from 'next/image'
import { useContext } from 'react'
import { AuthContext } from './providers';

export default function Home() {

  const { user } = useContext(AuthContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>HI</h2>
    </main>
  )
}

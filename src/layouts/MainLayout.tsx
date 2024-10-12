import Footer from '@/features/components/Footer'
import Navbar from '@/features/components/Navbar'
import React from 'react'

type MainLayoutProps = {
    children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
        <Navbar />
        <main className='flex-grow'>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '600'],
})

export const metadata: Metadata = {
  title: 'Sam Casebeer',
  description: 'Artist & Creative Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans bg-[#1a1a1a] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
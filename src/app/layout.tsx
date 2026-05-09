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
    <html lang="en" className={`${openSans.variable} bg-transparent`}>
      <body className="font-sans text-white antialiased bg-transparent">
        {/* Background image */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/retrotrain.png)' }}
        />
        {/* Signature */}
        <img
          src="/signature.png"
          alt="Sam Casebeer"
          className="fixed bottom-4 right-4 -z-10 w-32 opacity-100 pointer-events-none"
        />
        {/* Optional dark overlay to keep text readable */}
        <div className="fixed inset-0 -z-10 bg-black/60" />
        {children}
      </body>
    </html>
  )
}
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
  icons: {
    icon: '/star-64.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} bg-transparent`}>
      <body className="font-sans text-white antialiased bg-transparent">
        
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/commie1.png)' }}
        />
        
        <div className="fixed inset-0 -z-10 bg-black/50" />
        {children}
      </body>
    </html>
  )
}
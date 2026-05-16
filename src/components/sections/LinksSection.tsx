'use client'

import NextLink from 'next/link'
import { useState } from 'react'

export default function LinksSection() {
  const [copied, setCopied] = useState(false)

  const email = 'samuel.casebeer@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    { label: 'GitHub',     href: 'https://github.com/samcasebeer539' },
    { label: 'LinkedIn',   href: 'https://linkedin.com/in/samuel-casebeer' },
    { label: 'Resume', href: '/resume1.pdf' },
    { label: 'Instagram',  href: 'https://instagram.com/samcasebeer.art' },
    { label: 'Letterboxd', href: 'https://boxd.it/53PyP' },
    
  ]

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleCopyEmail}
        className="text-sm text-white/100 hover:text-white transition-colors w-fit text-left"
      >
        {copied ? 'Copied!' : 'Email'}
      </button>
      
      {links.map(({ label, href }) => (
        <NextLink
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/100 hover:text-white transition-colors w-fit"
        >
          {label}
        </NextLink>
      ))}

      
    </div>
  )
}
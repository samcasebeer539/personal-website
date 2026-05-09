import NextLink from 'next/link'

export default function LinksSection() {
  const links = [
    { label: 'GitHub',    href: 'https://github.com/samcasebeer539' },
    { label: 'LinkedIn',  href: 'https://linkedin.com/in/samuel-casebeer' },
    { label: 'Instagram', href: 'https://instagram.com/samcasebeer.art' },
  ]

  return (
    <div className="flex flex-col gap-2">
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
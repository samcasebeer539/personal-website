'use client'

import { User, ImageIcon, FolderOpen, ExternalLink, Info } from 'lucide-react'
import Gallery from '@/components/Gallery'
import GalleryFilter from '@/components/GalleryFilter'
import { useLayoutEffect, useRef, useState } from 'react'

const HEADER_HEIGHT = 44

const sections = [
  { id: 'sam',       label: 'Sam',       icon: User },
  { id: 'galleries', label: 'Galleries', icon: ImageIcon },
  { id: 'projects',  label: 'Projects',  icon: FolderOpen },
  { id: 'links',     label: 'Links',     icon: ExternalLink },
  { id: 'about',     label: 'About',     icon: Info },
] as const

type Medium = 'All' | 'Blender 3D' | 'Procreate' | 'Illustration'

export default function Home() {
  const total = sections.length
  const headerRefs = useRef<(HTMLDivElement | null)[]>([])
  const ticking = useRef(false)

  const [activeFilter, setActiveFilter] = useState<Medium>('All')

  useLayoutEffect(() => {
    const sectionH = window.innerHeight - total * HEADER_HEIGHT

    const updateHeaders = () => {
      const scrollY = window.scrollY

      sections.forEach((_, index) => {
        const header = headerRefs.current[index]
        if (!header) return

        const sectionStart = index * (HEADER_HEIGHT + sectionH)

        const naturalY = sectionStart - scrollY
        const pinnedTop = index * HEADER_HEIGHT
        const pinnedBottom =
          window.innerHeight - (total - index) * HEADER_HEIGHT

        const clamped = Math.min(
          pinnedBottom,
          Math.max(pinnedTop, naturalY)
        )

        // translate3d forces GPU compositing and keeps motion perfectly synced
        header.style.transform = `translate3d(0, ${clamped}px, 0)`
      })

      ticking.current = false
    }

    const onScroll = () => {
      // sync updates to the browser paint cycle
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(updateHeaders)
      }
    }

    updateHeaders()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateHeaders)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateHeaders)
    }
  }, [total])

  return (
    <div className="bg-[#1a1a1a]">
      {/* ── fixed header overlay ───────────────────────────────────────── */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {sections.map((section, index) => {
          const Icon = section.icon

          
          return (
            <div
              key={section.id}
              ref={(el) => {
                headerRefs.current[index] = el
              }}
              className="absolute top-0 left-0 right-0 bg-[#1a1a1a] flex items-center gap-3 px-6 pointer-events-auto"
              style={{
                height: HEADER_HEIGHT,
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <Icon size={15} className="text-white/60" />

              <span className="text-sm tracking-wide text-white/60">
                {section.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* ── scrollable content ────────────────────────────────────────── */}
      {sections.map((section, index) => {
        const pinnedAbove = (index + 1) * HEADER_HEIGHT
        const pinnedBelow = (total - index - 1) * HEADER_HEIGHT

        return (
          <section
            key={section.id}
            className="px-6"
            style={{
              minHeight: `calc(100vh - ${
                pinnedAbove + pinnedBelow
              }px)`,
              paddingTop: pinnedAbove,
            }}
          >
            {section.id === 'sam' && (
              <p className="text-sm text-white/40 leading-relaxed font-light max-w-sm">
                I'm Sam Casebeer, I'm an artist and creative developer
                based in California.
              </p>
            )}

            {section.id === 'galleries' && (
              <>
                <div
                  className="sticky bg-[#1a1a1a] -mx-6 px-6 flex items-center"
                  style={{
                    top: pinnedAbove,
                    height: HEADER_HEIGHT,
                    zIndex: 10,
                  }}
                >
                  <GalleryFilter
                    active={activeFilter}
                    onChange={setActiveFilter}
                  />
                </div>

                <Gallery
                  active={activeFilter}
                  onChange={setActiveFilter}
                />
              </>
            )}

            {section.id === 'projects' && (
              <p className="text-sm text-white/40">
                Projects coming soon.
              </p>
            )}

            {section.id === 'links' && (
              <p className="text-sm text-white/40">
                Links coming soon.
              </p>
            )}

            {section.id === 'about' && (
              <p className="text-sm text-white/40">
                About coming soon.
              </p>
            )}
          </section>
        )
      })}
    </div>
  )
}
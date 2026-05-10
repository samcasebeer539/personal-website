'use client'

import { User, ImageIcon, FolderOpen, ExternalLink, Info } from 'lucide-react'
import Gallery, { GalleryImage } from '@/components/Gallery'
import GalleryFilter from '@/components/GalleryFilter'
import { useState } from 'react'
import LinksSection from './sections/LinksSection'
import ProjectsSection from './sections/ProjectsSection'

const HEADER_HEIGHT = 44

const sections = [
  { id: 'sam',       label: 'Sam',       icon: User },
  { id: 'galleries', label: 'Galleries', icon: ImageIcon },
  { id: 'projects',  label: 'The Project',  icon: FolderOpen },
  { id: 'links',     label: 'Links',     icon: ExternalLink },
  { id: 'about',     label: 'About',     icon: Info },
] as const

type SectionId = typeof sections[number]['id']
type Medium = 'Blender 3D' | 'Procreate' | 'Illustration'

interface Props {
  images: GalleryImage[]
}

export default function ClientHome({ images }: Props) {
  const [open, setOpen] = useState<SectionId | null>('sam')
  const [activeFilter, setActiveFilter] = useState<Medium>('Blender 3D')

  return (
    <div className="min-h-screen flex flex-col">
      {sections.map((section) => {
        const Icon   = section.icon
        const isOpen = open === section.id

        return (
          <div key={section.id} className="flex flex-col">

            <button
              onClick={() => setOpen(open === section.id ? null : section.id)}
              className="w-full flex items-center gap-3 px-6 text-left transition-colors"
              style={{ height: HEADER_HEIGHT }}
            >
              <Icon size={15} className="text-white/100 shrink-0" />
              <span className={`text-sm tracking-wide text-white/100 ${isOpen ? 'underline underline-offset-4' : ''}`}>
                {section.label}
              </span>
            </button>

            {isOpen && (
              <div className="flex-1 pl-[51px] pr-6 py-4">
                {section.id === 'sam' && (
                  <p className="text-sm tracking-wide text-white/100 leading-relaxed font-light max-w-lg">
                    I'm Sam Casebeer, I'm a multimedia artist and aspiring creative developer based in California. This website is a
                    space for my art and projects. 
                    
                    Feel free to explore and reach out for collabs, commissions, steady employment opportunites or just say hi!

                  </p>
                )}
                {section.id === 'galleries' && (
                  <>
                    <div className="mb-4">
                      <GalleryFilter active={activeFilter} onChange={setActiveFilter} />
                    </div>
                    <Gallery images={images} active={activeFilter} onChange={setActiveFilter} />
                  </>
                )}
                {section.id === 'projects' && <ProjectsSection />}
                {section.id === 'links' && <LinksSection />}
                {section.id === 'about' && (
                  <p className="text-sm text-white/40">About coming soon.</p>
                )}
              </div>
            )}

          </div>
        )
      })}
    </div>
  )
}
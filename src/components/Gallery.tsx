'use client'

import { useState } from 'react'
import Lightbox from './Lightbox'

type Medium = 'Blender 3D' | 'Procreate' | 'Illustration'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  medium: Medium
  span?: 'tall'
}

interface Props {
  images: GalleryImage[]
  active: Medium
  onChange: (medium: Medium) => void
}

export default function Gallery({ images, active }: Props) {
  const filtered = images.filter((img) => img.medium === active)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-2">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="inline-block w-full break-inside-avoid mb-1 overflow-hidden rounded-xs bg-white/5 cursor-zoom-in"
            aria-label={`View ${img.alt} fullscreen`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={filtered}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </section>
  )
}

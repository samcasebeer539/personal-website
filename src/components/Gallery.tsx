'use client'

import GalleryFilter from './GalleryFilter'

type Medium = 'All' | 'Blender 3D' | 'Procreate' | 'Illustration'

interface GalleryItem {
  id: string
  src: string
  alt: string
  medium: Exclude<Medium, 'All'>
  span?: 'normal' | 'tall'
}

const items: GalleryItem[] = [
  { id: '1', src: 'https://placehold.co/600x800/222/444', alt: 'Blender render 1', medium: 'Blender 3D', span: 'tall' },
  { id: '2', src: 'https://placehold.co/600x400/222/444', alt: 'Procreate 1', medium: 'Procreate' },
  { id: '3', src: 'https://placehold.co/600x400/222/444', alt: 'Illustration 1', medium: 'Illustration' },
  { id: '4', src: 'https://placehold.co/600x400/222/444', alt: 'Procreate 2', medium: 'Procreate' },
  { id: '5', src: 'https://placehold.co/600x800/222/444', alt: 'Blender render 2', medium: 'Blender 3D', span: 'tall' },
  { id: '6', src: 'https://placehold.co/600x400/222/444', alt: 'Illustration 2', medium: 'Illustration' },
]

interface Props {
  active: Medium
  onChange: (medium: Medium) => void
}

export default function Gallery({ active, onChange }: Props) {
  const filtered = active === 'All' ? items : items.filter((item) => item.medium === active)

  return (
    <section>
      <div className="grid grid-cols-2 gap-2 auto-rows-[200px]">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`overflow-hidden rounded bg-white/5 ${
              item.span === 'tall' ? 'row-span-2' : 'row-span-1'
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
'use client'

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

export default function Gallery({ images, active, onChange }: Props) {
  const filtered = images.filter((img) => img.medium === active)

  return (
    <section>
      <div className="columns-2 lg:columns-3 gap-3">
        {filtered.map((img) => (
          <div key={img.id} className="break-inside-avoid mb-3 overflow-hidden rounded-xs bg-white/5">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
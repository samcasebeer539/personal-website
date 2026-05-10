'use client'

type Medium = 'Blender 3D' | 'Procreate' | 'Illustration'

const mediums: Medium[] = ['Blender 3D', 'Procreate', 'Illustration']

interface Props {
  active: Medium
  onChange: (medium: Medium) => void
}

export default function GalleryFilter({ active, onChange }: Props) {
  return (
    <div className="flex gap-4 mb-6">
      {mediums.map((medium) => (
        <button
          key={medium}
          onClick={() => onChange(medium)}
          className={`text-sm tracking-wide transition-colors ${
            active === medium
              ? 'text-white'
              : 'text-white/60 hover:text-white/100'
          }`}
        >
          {medium}
        </button>
      ))}
    </div>
  )
}
'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from './Gallery'

interface Props {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onIndexChange: (index: number) => void
}

export default function Lightbox({ images, index, onClose, onIndexChange }: Props) {
  const touchStartX = useRef<number | null>(null)
  const isOpen = index !== null && images.length > 0
  const count = images.length

  const prev = () => index !== null && onIndexChange((index - 1 + count) % count)
  const next = () => index !== null && onIndexChange((index + 1) % count)

  // Keyboard controls + lock page scroll while open
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  })

  // Preload neighbours so clicking through feels instant
  useEffect(() => {
    if (index === null || count < 2) return
    for (const i of [(index + 1) % count, (index - 1 + count) % count]) {
      const img = new Image()
      img.src = images[i].src
    }
  }, [index, images, count])

  if (typeof document === 'undefined') return null

  const current = index !== null ? images[index] : null

  return createPortal(
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(dx) > 50) (dx > 0 ? prev : next)()
            touchStartX.current = null
          }}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <motion.img
            key={current.id}
            src={current.src}
            alt={current.alt}
            className="max-h-[92vh] max-w-[88vw] object-contain select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />

          <button
            onClick={(e) => { e.stopPropagation(); onClose() }}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {count > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-10 sm:px-6 flex items-center text-white/60 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-10 sm:px-6 flex items-center text-white/60 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-wide text-white/60">
                {index! + 1} / {count}
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

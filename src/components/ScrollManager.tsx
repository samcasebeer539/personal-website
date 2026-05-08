'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSiteStore, sections } from '@/lib/store'

gsap.registerPlugin(ScrollTrigger)

const HEADER_HEIGHT = 44 // px — height of each section header row

export default function ScrollManager() {
  const { setActiveSection } = useSiteStore()
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    sections.forEach((section, index) => {
      const header = document.getElementById(`header-${section}`)
      if (!header) return

      ScrollTrigger.create({
        trigger: header,
        start: `top ${index * HEADER_HEIGHT}px`,
        pin: true,
        pinSpacing: false,
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      })
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [setActiveSection])

  return null
}
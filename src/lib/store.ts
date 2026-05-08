import { create } from 'zustand'

type Section = 'sam' | 'galleries' | 'projects' | 'links' | 'about'

interface Store {
  activeSection: Section
  setActiveSection: (section: Section) => void
}

export const useSiteStore = create<Store>((set) => ({
  activeSection: 'sam',
  setActiveSection: (section) => set({ activeSection: section }),
}))

export const sections: Section[] = ['sam', 'galleries', 'projects', 'links', 'about']
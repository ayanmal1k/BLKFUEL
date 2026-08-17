'use client'

import React, { createContext, useContext, useState } from 'react'

interface WhitepaperContextType {
  isOpen: boolean
  openWhitepaper: () => void
  closeWhitepaper: () => void
}

const WhitepaperContext = createContext<WhitepaperContextType>({
  isOpen: false,
  openWhitepaper: () => {},
  closeWhitepaper: () => {},
})

export function WhitepaperProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openWhitepaper = () => setIsOpen(true)
  const closeWhitepaper = () => setIsOpen(false)

  return (
    <WhitepaperContext.Provider value={{ isOpen, openWhitepaper, closeWhitepaper }}>
      {children}
    </WhitepaperContext.Provider>
  )
}

export function useWhitepaper() {
  const context = useContext(WhitepaperContext)
  if (!context) {
    throw new Error('useWhitepaper must be used within a WhitepaperProvider')
  }
  return context
}

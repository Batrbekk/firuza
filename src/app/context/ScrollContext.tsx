'use client'

import { createContext, useContext, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ScrollContext = createContext({})

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Обновляем ScrollTrigger при монтировании
    ScrollTrigger.refresh()

    // Очищаем все триггеры при размонтировании
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <ScrollContext.Provider value={{}}>
      {children}
    </ScrollContext.Provider>
  )
} 
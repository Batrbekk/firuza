'use client'

import { useState, useEffect } from 'react'

const checkIfFirstVisit = () => {
  if (typeof window === 'undefined') return true
  return !sessionStorage.getItem('hasVisitedBefore')
}

export const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(checkIfFirstVisit)
  const [isLoading, setIsLoading] = useState(checkIfFirstVisit)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedBefore')
    
    if (!hasVisited) {
      sessionStorage.setItem('hasVisitedBefore', 'true')
      setIsFirstVisit(true)
    } else {
      setIsFirstVisit(false)
    }
    
    setIsLoading(false)
  }, [])

  return { isFirstVisit, isLoading }
} 
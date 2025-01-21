'use client'

import Script from 'next/script'
import { useEffect } from 'react'

interface YClientsWidgetProps {
  companyId: string;
}

export default function YClientsWidget({ companyId }: YClientsWidgetProps) {
  useEffect(() => {
    return () => {
      const oldScript = document.querySelector('script[src*="yclients.com/widgetJS"]')
      if (oldScript) {
        oldScript.remove()
      }
    }
  }, [companyId])

  return (
    <Script
      strategy="afterInteractive"
      src={`//w${companyId}.yclients.com/widgetJS`}
      charSet="UTF-8"
    />
  )
} 
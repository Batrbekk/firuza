'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Input from './Input'
import Button from './Button'
import { Checkbox } from './Checkbox'

interface PromotionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PromotionModal({ isOpen, onClose }: PromotionModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [isOpen])

  const [formData, setFormData] = useState({
    phone: '',
    consent1: false,
    consent2: false
  })

  if (!isOpen || !mounted) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const modal = (
    <div className="fixed inset-0 z-[9999]">
      <div 
        className="fixed inset-0 bg-[#292929]/70 backdrop-blur-[10px]"
        onClick={handleBackdropClick}
      />

      <div 
        className="fixed inset-0 flex items-center justify-center"
        onClick={handleBackdropClick}
      >
        <div className="relative bg-white w-[760px] px-6 md:px-[112px] py-[56px] mx-5">
          <button className="absolute top-4 right-4" onClick={onClose}>
            <Image 
              src="/icons/close.svg" 
              alt="close" 
              width={12} 
              height={12}
            />
          </button>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[28px] md:text-[38px] font-tenor-sans">
                Не упустите свою скидку!
              </h2>
              <p className="text-[16px] font-tilda-sans font-light">
                Хотите узнать подробности о нашей эксклюзивной скидке и получить персональное предложение? Заполните форму ниже, и наш менеджер свяжется с вами в ближайшее время, чтобы ответить на все ваши вопросы
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-3">
              <Input
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />

              <div className="flex flex-col gap-y-4 md:gap-3">
                <Checkbox
                  label="Ознакомлена с правилами предоставления скидок"
                  checked={formData.consent1}
                  onChange={(e) => setFormData({...formData, consent1: e.target.checked})}
                />
                <Checkbox
                  label="Даю свое согласие на обработку персональных данных"
                  checked={formData.consent2}
                  onChange={(e) => setFormData({...formData, consent2: e.target.checked})}
                />
              </div>

              <Button className="w-[258px] h-[50px]">
                Получить скидку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
} 
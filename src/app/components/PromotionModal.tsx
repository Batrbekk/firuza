'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Input from './Input'
import Button from './Button'
import { Checkbox } from './Checkbox'
import { toast } from 'sonner'
import { IMaskInput } from 'react-imask'

interface PromotionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PromotionModal({ isOpen, onClose }: PromotionModalProps) {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({
    phone: false,
    consents: false
  })

  const [formData, setFormData] = useState({
    phone: '',
    consent1: false,
    consent2: false
  })

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

  if (!isOpen || !mounted) return null

  const validatePhone = (phone: string) => {
    const phoneDigits = phone.replace(/\D/g, '');
    return phoneDigits.length === 11;
  }

  const handleSubmit = async () => {
    setErrors({ phone: false, consents: false })
    
    let hasError = false
    
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 11) {
      setErrors(prev => ({ ...prev, phone: true }))
      hasError = true
    }
    
    if (!formData.consent1 || !formData.consent2) {
      setErrors(prev => ({ ...prev, consents: true }))
      hasError = true
    }
    
    if (hasError) return

    setIsLoading(true)
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('phone', formData.phone)

      const response = await fetch('/promotion-call-mail', {
        method: 'POST',
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      toast.success('Заявка успешно отправлена!', {
        className: 'font-tilda-sans',
        style: {
          background: '#292929',
          color: 'white',
          border: 'none'
        },
        duration: 3000
      })
      
      setFormData({
        phone: '',
        consent1: false,
        consent2: false
      })
      
      onClose()
      
    } catch (error) {
      toast.error('Произошла ошибка. Попробуйте позже.', {
        className: 'font-tilda-sans',
        style: {
          background: '#F00F0F',
          color: 'white',
          border: 'none'
        }
      })
    } finally {
      setIsLoading(false)
    }
  }

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
              <div className="">
                <IMaskInput
                  mask="+{7} (000) 000-00-00"
                  value={formData.phone}
                  unmask={false}
                  onAccept={(value) => {
                    setFormData(prev => ({ ...prev, phone: value }));
                    setErrors(prev => ({ ...prev, phone: false }));
                  }}
                  className={`h-[50px] px-4 bg-transparent border font-tilda-sans text-[14px] placeholder:text-black/40 focus:outline-none transition-colors w-full ${
                    errors.phone 
                      ? 'border-[#F00F0F] focus:border-[#F00F0F]' 
                      : 'border-black focus:border-primary'
                  }`}
                  placeholder="Телефон*"
                />
                {errors.phone && (
                  <p className="mt-1 text-[#F00F0F] text-sm font-tilda-sans">Введите телефон</p>
                )}
              </div>

              <div className="flex flex-col gap-y-4 md:gap-3">
                <Checkbox
                  label="Ознакомлена с правилами предоставления скидок"
                  checked={formData.consent1}
                  error={errors.consents}
                  onChange={() => {
                    setFormData(prev => ({ ...prev, consent1: !prev.consent1 }))
                    setErrors(prev => ({ ...prev, consents: false }))
                  }}
                />
                <Checkbox
                  label="Даю свое согласие на обработку персональных данных"
                  checked={formData.consent2}
                  error={errors.consents}
                  onChange={() => {
                    setFormData(prev => ({ ...prev, consent2: !prev.consent2 }))
                    setErrors(prev => ({ ...prev, consents: false }))
                  }}
                />
              </div>

              <Button 
                className="w-[258px] h-[50px]"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Отправка...</span>
                  </div>
                ) : (
                  'Получить скидку'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
} 
'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Input from './Input'
import Button from './Button'
import { Checkbox } from './Checkbox'
import Select from './Select'
import { toast } from 'sonner'
import { IMaskInput } from 'react-imask'

interface CourseModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  course: string;
  name: string;
  email: string;
  phone: string;
  salon: string;
  consent1: boolean;
  consent2: boolean;
}

export default function CourseModal({ isOpen, onClose }: CourseModalProps) {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    course: '',
    name: '',
    email: '',
    phone: '',
    salon: '',
    consent1: false,
    consent2: false
  })

  const [errors, setErrors] = useState({
    course: false,
    name: false,
    email: false,
    phone: false,
    salon: false,
    consents: false
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

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    return phone.length >= 10
  }

  const handleSubmit = async () => {
    // Сброс ошибок
    setErrors({
      course: false,
      name: false,
      email: false,
      phone: false,
      salon: false,
      consents: false
    })
    
    // Валидация
    let hasError = false
    
    if (!formData.course) {
      setErrors(prev => ({ ...prev, course: true }))
      hasError = true
    }

    if (!formData.name) {
      setErrors(prev => ({ ...prev, name: true }))
      hasError = true
    }

    if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: true }))
      hasError = true
    }

    if (!validatePhone(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: true }))
      hasError = true
    }

    if (!formData.salon) {
      setErrors(prev => ({ ...prev, salon: true }))
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
      formDataToSend.append('course', formData.course)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('salon', formData.salon)

      const response = await fetch('/study-mail', {
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
      
      // Очистка формы
      setFormData({
        course: '',
        name: '',
        email: '',
        phone: '',
        salon: '',
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
        <div className="relative bg-white w-[800px] px-6 md:px-[112px] py-[56px] mx-5">
          <button className="absolute top-4 right-4" onClick={onClose}>
            <Image 
              src="/icons/close.svg" 
              alt="close" 
              width={12} 
              height={12}
            />
          </button>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-[18px] font-tilda-sans font-bold">
                ВЫБЕРИТЕ КУРС И ЗАПИШИТЕСЬ ПРЯМО СЕЙЧАС!
              </h2>
              <p className="text-[16px] font-tilda-sans font-light">
                Просто выберите интересующий вас курс и заполните форму ниже.
                Мы свяжемся с вами в ближайшее время для подтверждения записи
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Select
                options={['Маникюр базовый с 0', 'PRO - маникюр', 'Верхние формы']}
                placeholder="Выбрать курс"
                className="w-full"
                value={formData.course}
                error={errors.course}
                onChange={(value) => {
                  setFormData(prev => ({ ...prev, course: value }))
                  setErrors(prev => ({ ...prev, course: false }))
                }}
              />

              <Input
                placeholder="ФИО*"
                value={formData.name}
                variant="black"
                className="h-[50px]"
                error={errors.name}
                errorMessage={errors.name ? "Введите ваше ФИО" : undefined}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, name: e.target.value }))
                  setErrors(prev => ({ ...prev, name: false }))
                }}
              />

              <Input
                placeholder="Email*"
                value={formData.email}
                variant="black"
                className="h-[50px]"
                error={errors.email}
                errorMessage={errors.email ? "Введите корректный email" : undefined}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, email: e.target.value }))
                  setErrors(prev => ({ ...prev, email: false }))
                }}
              />

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

              <Select
                options={['на Саввинском шоссе', 'на Народного ополчения']}
                placeholder="Адрес салона"
                className="w-full"
                value={formData.salon}
                error={errors.salon}
                onChange={(value) => {
                  setFormData(prev => ({ ...prev, salon: value }))
                  setErrors(prev => ({ ...prev, salon: false }))
                }}
              />

              <div className="flex flex-col gap-y-4">
                <Checkbox
                  label="Проставляя галочку в чек-боке, я прочитал (а) и согласен (на) с условиями договора-оферты"
                  checked={formData.consent1}
                  error={errors.consents}
                  onChange={() => {
                    setFormData(prev => ({ ...prev, consent1: !prev.consent1 }))
                    setErrors(prev => ({ ...prev, consents: false }))
                  }}
                />
                <Checkbox
                  label="Ознакомлен (а) с политикой обработки персональных данных и даю согласие на обработку персональных данных"
                  checked={formData.consent2}
                  error={errors.consents}
                  onChange={() => {
                    setFormData(prev => ({ ...prev, consent2: !prev.consent2 }))
                    setErrors(prev => ({ ...prev, consents: false }))
                  }}
                />
              </div>

              <Button 
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Отправка...</span>
                  </div>
                ) : (
                  'ЗАПИСАТЬСЯ'
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
'use client'

import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { Checkbox } from './Checkbox'

interface PromotionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PromotionModal({ isOpen, onClose }: PromotionModalProps) {
  const [formData, setFormData] = useState({
    phone: '',
    consent1: false,
    consent2: false
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[#292929]/70 backdrop-blur-[10px]"
        onClick={onClose}
      />

      <div className="relative bg-white w-[760px] px-[112px] py-[56px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-[38px] font-tenor-sans font-light">
              Не упустите свою скидку!
            </h2>
            <p className="text-base font-tilda-sans font-light">
              Хотите узнать подробности о нашей эксклюзивной скидке и получить персональное предложение? Заполните форму ниже, и наш менеджер свяжется с вами в ближайшее время, чтобы ответить на все ваши вопросы
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Input
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />

            <div className="flex flex-col gap-3">
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
  )
} 
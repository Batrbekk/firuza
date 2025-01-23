"use client"

import { useState, FormEvent } from "react";
import { Checkbox } from "./Checkbox";
import Input from "./Input";
import Button from "./Button";
import { toast } from 'sonner';
import { IMaskInput } from 'react-imask';

interface FormData {
    name: string;
    email: string;
    phone: string;
    consent: boolean;
    newsletter: boolean;
}

export default function PromotionForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        consent: false,
        newsletter: false
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        consent: false
    });

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        setErrors({
            name: false,
            email: false,
            phone: false,
            consent: false
        });
        
        let hasError = false;
        
        if (!formData.name.trim()) {
            setErrors(prev => ({ ...prev, name: true }));
            hasError = true;
        }
        
        if (!validateEmail(formData.email)) {
            setErrors(prev => ({ ...prev, email: true }));
            hasError = true;
        }
        
        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (phoneDigits.length !== 11) {
            setErrors(prev => ({ ...prev, phone: true }));
            hasError = true;
        }
        
        if (!formData.consent) {
            setErrors(prev => ({ ...prev, consent: true }));
            hasError = true;
        }
        
        if (hasError) return;

        setIsLoading(true);
        
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('newsletter', formData.newsletter.toString());

            const response = await fetch('/promotion-mail', {
                method: 'POST',
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            toast.success('Заявка успешно отправлена!', {
                className: 'font-tilda-sans',
                style: {
                    background: '#292929',
                    color: 'white',
                    border: 'none'
                },
                duration: 3000
            });
            
            setFormData({
                name: '',
                email: '',
                phone: '',
                consent: false,
                newsletter: false
            });
            
        } catch (error) {
            toast.error('Произошла ошибка. Попробуйте позже.', {
                className: 'font-tilda-sans',
                style: {
                    background: '#F00F0F',
                    color: 'white',
                    border: 'none'
                }
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-3">
            <Input 
                    variant="black" 
                    placeholder="Имя*" 
                    className="w-full h-[50px]"
                    value={formData.name}
                    error={errors.name}
                    errorMessage={errors.name ? "Введите имя" : undefined}
                    onChange={(e) => {
                        setFormData(prev => ({ ...prev, name: e.target.value }));
                        setErrors(prev => ({ ...prev, name: false }));
                    }}
                />
                <Input 
                    variant="black" 
                    placeholder="Email*" 
                    className="w-full h-[50px]"
                    value={formData.email}
                    error={errors.email}
                    errorMessage={errors.email ? "Введите корректный email" : undefined}
                    onChange={(e) => {
                        setFormData(prev => ({ ...prev, email: e.target.value }));
                        setErrors(prev => ({ ...prev, email: false }));
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
            <Checkbox 
                label="Я прочитал(а) и даю Согласие на получение информационной и рекламной рассылки"
                checked={formData.newsletter}
                onChange={() => setFormData(prev => ({ ...prev, newsletter: !prev.newsletter }))}
            />
            <Checkbox 
                label="Я прочитал(а) и согласен(а) с Политикой обработки персональных данных и даю Согласие на обработку персональных данных"
                checked={formData.consent}
                error={errors.consent}
                onChange={() => {
                    setFormData(prev => ({ ...prev, consent: !prev.consent }));
                    setErrors(prev => ({ ...prev, consent: false }));
                }}
            />
            <Button 
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? (
                    <div className="flex items-center justify-center gap-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Отправка...</span>
                    </div>
                ) : (
                    'Записаться'
                )}
            </Button>
        </form>
    );
} 
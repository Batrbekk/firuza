"use client"

import { useState, FormEvent } from "react";
import { Checkbox } from "./Checkbox";
import FileInput from "./FileInput";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { toast } from 'sonner';
import { IMaskInput } from 'react-imask';

interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
	file: File | null;
	consent: boolean;
}

export default function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		message: '',
		file: null,
		consent: false
	});

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		phone: false,
		message: false,
		consent: false
	});

	const validateEmail = (email: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		
		// Сброс ошибок
		setErrors({
			name: false,
			email: false,
			phone: false,
			message: false,
			consent: false
		});
		
		// Валидация
		let hasError = false;
		
		if (!formData.name.trim()) {
			setErrors(prev => ({ ...prev, name: true }));
			hasError = true;
		}
		
		if (!validateEmail(formData.email)) {
			setErrors(prev => ({ ...prev, email: true }));
			hasError = true;
		}
		
		if (!formData.phone) {
			setErrors(prev => ({ ...prev, phone: true }));
			hasError = true;
		}
		
		if (!formData.message) {
			setErrors(prev => ({ ...prev, message: true }));
			hasError = true;
		}
		
		if (!formData.consent) {
			setErrors(prev => ({ ...prev, consent: true }));
			hasError = true;
		}
		
		// Проверяем, что номер телефона заполнен полностью
		const phoneDigits = formData.phone.replace(/\D/g, '');
		if (phoneDigits.length !== 11) {
			setErrors(prev => ({ ...prev, phone: true }));
			hasError = true;
		}
		
		if (hasError) return;

		setIsLoading(true);
		
		try {
			const formDataToSend = new FormData();
			formDataToSend.append('name', formData.name);
			formDataToSend.append('email', formData.email);
			formDataToSend.append('phone', formData.phone);
			formDataToSend.append('message', formData.message);
			if (formData.file) {
				formDataToSend.append('file', formData.file);
			}

			const response = await fetch('/contact-mail', {
				method: 'POST',
				body: formDataToSend,
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			toast.success('Сообщение успешно отправлено!', {
				className: 'font-tilda-sans',
				style: {
					background: '#292929',
					color: 'white',
					border: 'none'
				},
				duration: 3000
			});
			
			// Очистка формы
			setFormData({
				name: '',
				email: '',
				phone: '',
				message: '',
				file: null,
				consent: false
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
		<form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-10">
			<div className="flex flex-col gap-y-5">
				<div className="flex flex-col md:flex-row gap-5">
					<Input 
						variant="black" 
						placeholder="Имя*" 
						className="w-full md:max-w-[240px] h-[50px]"
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
						className="w-full md:max-w-[240px] h-[50px]"
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
							className={`h-[50px] px-4 bg-transparent border font-tilda-sans text-[14px] placeholder:text-black/40 focus:outline-none transition-colors w-full lg:w-[500px] ${
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
				</div>
				<TextArea 
					placeholder="Задайте вопрос*" 
					className="w-full"
					value={formData.message}
					error={errors.message}
					variant="black"
					errorMessage={errors.message ? "Это поле обязательно" : undefined}
					onChange={(e) => {
						setFormData(prev => ({ ...prev, message: e.target.value }));
						setErrors(prev => ({ ...prev, message: false }));
					}}
				/>
				<div className="flex items-start justify-between flex-col lg:flex-row gap-y-6">
					<div className="flex flex-col gap-y-4">
						<p className="font-tilda-sans text-[12px] font-light">
							Загрузите файл обращения в формате .pdf, .xls или .docx размером не более 5Mb
						</p>
						<FileInput 
							accept=".pdf,.doc,.docx"
							onChange={(files) => setFormData(prev => ({ ...prev, file: files[0] || null }))}
						/>
					</div>
					<div className="flex flex-col gap-y-9 w-full lg:max-w-[490px]">
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
								'отправить сообщение'
							)}
						</Button>
					</div>
				</div>
			</div>
		</form>
	);
}
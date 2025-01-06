"use client"

import { useState } from "react";
import { Checkbox } from "./Checkbox";
import FileInput from "./FileInput";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";
export default function ContactForm() {

	const [checked, setChecked] = useState(false);
	return (
		<div className="w-full flex flex-col gap-y-10">
			<div className="flex flex-col gap-y-5">
				<div className="flex flex-col md:flex-row gap-5">
					<Input variant="black" placeholder="Имя" className="w-full md:max-w-[240px]" />
					<Input variant="black" placeholder="Email*" className="w-full md:max-w-[240px]" />
					<Select 
						options={['Салоны', 'Другой салон', 'Еще салон']}
						placeholder="Вид обращения*"
						className="w-full lg:w-[500px]"
  					onChange={(value) => console.log(value)}
					/>
				</div>
				<TextArea placeholder="Задайте вопрос*" className="w-full" />
				<div className="flex items-start justify-between flex-col lg:flex-row gap-y-6">
					<div className="flex flex-col gap-y-4">
						<p className="font-tilda-sans text-[12px] font-light">
							Загрузите файл обращения в формате .pdf, .xls или .docx размером не более 5Mb
						</p>
						<FileInput 
							accept=".pdf,.doc,.docx"
  						onChange={(files) => console.log(files)}
						/>
					</div>
					<div className="flex flex-col gap-y-9 w-full lg:max-w-[490px]">
						<Checkbox 
							label="Я прочитал(а) и согласен(а) с Политикой обработки персональных данных и даю Согласие на обработку персональных данных" 
							checked={checked}
							onChange={() => setChecked(!checked)}
						/>
						<Button> 
							отправить сообщение
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface ArticleCardProps {
	image: string;
	category: string;
	date: string;
	title: string;
	onCategoryClick?: (category: string) => void;
}

export default function ArticleCard({ 
	image, 
	category, 
	date, 
	title,
	onCategoryClick 
}: ArticleCardProps) {
	const [isHovered, setIsHovered] = useState(false)
	const router = useRouter()

	const handleCategoryClick = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		if (onCategoryClick) {
			onCategoryClick(category)
		} else {
			router.push('/article')
		}
	}

	return (
		<div 
			className="flex flex-col gap-y-5 w-full md:max-w-[299px]"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link href="/article" className="block relative w-full aspect-[299/360]">
				<img 
					src={image} 
					alt={title} 
					className="absolute inset-0 w-full h-full object-cover"
				/>
				{/* Overlay on hover */}
				<div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
					isHovered ? 'opacity-100' : 'opacity-0'
				}`}>
					<span className="text-white font-tilda-sans">Подробнее</span>
				</div>
			</Link>
			
			<div className="flex flex-col gap-y-4 justify-center text-center pb-5 px-[9.5px]">
				<div className="flex items-center justify-center gap-x-2">
					<button 
						onClick={handleCategoryClick}
						className="font-tilda-sans font-light text-[14px] uppercase hover:text-primary transition-colors"
					>
						{category}
					</button>
					<div className="w-1 h-1 bg-black rounded-full" />
					<span className="font-tilda-sans font-light text-[14px] uppercase">
						{date}
					</span>
				</div>
				
				<Link href="/article">
					<h3 className="font-tilda-sans text-[16px] font-bold hover:text-primary transition-colors">
						{title}
					</h3>
				</Link>
			</div>
		</div>
	)
}
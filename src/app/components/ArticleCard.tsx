interface ArticleCardProps {
	image: string;
	category: string;
	date: string;
	title: string;
}

export default function ArticleCard({ image, category, date, title }: ArticleCardProps) {
	return (
		<div className="flex flex-col gap-y-5 w-full md:max-w-[299px]">
			<div className="relative w-full aspect-[299/360]">
				<img 
					src={image} 
					alt={title} 
					className="absolute inset-0 w-full h-full object-cover"
				/>
			</div>
			
			<div className="flex flex-col gap-y-4 justify-center text-center pb-5 px-[9.5px]">
				<div className="flex items-center justify-center gap-x-2">
					<span className="font-tilda-sans font-light text-[14px] uppercase">
						{category}
					</span>
					<div className="w-1 h-1 bg-black rounded-full" />
					<span className="font-tilda-sans font-light text-[14px] uppercase">
						{date}
					</span>
				</div>
				
				<h3 className="font-tilda-sans text-[16px] font-bold">
					{title}
				</h3>
			</div>
		</div>
	)
}
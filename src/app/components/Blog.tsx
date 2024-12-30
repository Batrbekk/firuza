'use client'

import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: number
  image: string
  date: {
    day: string
    month: string
    year: string
  }
  category: string
  title: string
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="w-[370px]">
      <div className="relative h-[370px] mb-2">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute left-0 bottom-0 bg-white w-[90px] h-[90px] flex flex-col items-center justify-center">
          <span className="text-[32px] leading-[45px]">{post.date.day}</span>
          <span className="text-sm">{post.date.month} {post.date.year}</span>
        </div>
      </div>

      <div className="border-b border-primary py-6 flex flex-col gap-2">
        <h5 className="text-lg font-tilda-sans font-bold block">{post.category}</h5>
        <h3 className="text-base font-tilda-sans font-light">{post.title}</h3>
        <button
                className="w-[126px] py-2 text-primary flex items-center gap-x-2 font-tilda-sans font-bold text-sm uppercase group"
            >
                Подробнее
                <Image 
                src="/icons/r-arrow.svg" 
                alt="arrow-right" 
                width={17} 
                height={10} 
                className="transition-transform duration-300 group-hover:translate-x-2"
                />
            </button>
      </div>
    </article>
  )
}

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      image: '/images/blog/1.svg',
      date: {
        day: '16',
        month: 'окт',
        year: '24'
      },
      category: 'МАКИЯЖ',
      title: 'Красивый вечерний макияж от Beatium'
    },
    {
      id: 2,
      image: '/images/blog/2.svg',
      date: {
        day: '03',
        month: 'нояб',
        year: '24'
      },
      category: 'НОГТИ',
      title: 'Красивый вечерний макияж от Beatium'
    },
    {
      id: 3,
      image: '/images/blog/3.svg',
      date: {
        day: '17',
        month: 'окт',
        year: '24'
      },
      category: 'ПАРИКМАХЕРСКИЕ УСЛУГИ',
      title: '10 способов скрыть редеющие волосы'
    },
    {
      id: 4,
      image: '/images/blog/4.svg',
      date: {
        day: '12',
        month: 'дек',
        year: '24'
      },
      category: 'ПЕДИКЮР',
      title: 'Идеальный педикюр в домашних условиях'
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-9">
          <div className="flex flex-col gap-2">
            <h6 className="text-primary text-sm font-tilda-sans font-bold uppercase">блог</h6>
            <h2 className="text-[44px] font-tenor-sans uppercase leading-[128%]">Интересные и полезные <br /> статьи из нашего блога</h2>
          </div>
          <Link 
            href="/blog"
            className="h-[50px] max-w-[240px] w-full bg-primary text-white flex items-center justify-center hover:opacity-80 uppercase font-tilda-sans font-bold text-sm"
          >
            больше статей
          </Link>
        </div>

        <div className="flex gap-5">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog 
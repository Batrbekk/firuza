'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { flushSync } from 'react-dom'

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
    <article className="w-full md:w-[370px] flex-1 min-w-full md:min-w-0">
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

      <div className="md:border-b border-primary py-6 flex flex-col gap-2">
        <h5 className="text-lg font-tilda-sans font-bold block">
          {post.category}
        </h5>
        <h3 className="text-base font-tilda-sans font-light">
          {post.title}
        </h3>
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
      image: '/images/blog/1.png',
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
      image: '/images/blog/2.png',
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
      image: '/images/blog/3.png',
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
      image: '/images/blog/4.png',
      date: {
        day: '12',
        month: 'дек',
        year: '24'
      },
      category: 'ПЕДИКЮР',
      title: 'Идеальный педикюр в домашних условиях'
    }
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    skipSnaps: false,
    slidesToScroll: 1,
    inViewThreshold: 0.7
  })

  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback(() => {
    if (!emblaApi) return
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    
    onScroll()
  }, [emblaApi, onScroll])

  return (
    <section id="blog-section" className="pt-[60px] pb-[52px] md:py-20 lg:max-w-[1540px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-9 max-w-[1280px] mx-auto gap-y-5">
        <div className="flex flex-col gap-2">
          <h6 className="text-primary text-[14px] font-tilda-sans font-bold uppercase">
            блог
          </h6>
          <h2 className="text-[28px] md:text-[44px] font-tenor-sans uppercase leading-[128%]">
            Интересные и полезные <br /> статьи из нашего блога
          </h2>
        </div>
        <Link 
          href="/blog"
          className="h-[50px] max-w-[240px] w-full bg-primary text-white items-center justify-center hover:opacity-80 uppercase font-tilda-sans font-bold text-[14px] hidden md:flex"
        >
          больше статей
        </Link>
      </div>

      <div className="hidden gap-5 md:flex md:flex-wrap lg:flex-nowrap justify-center">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="md:hidden">
        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex gap-5">
            {posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <button 
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-6 w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center z-100 top-[148px]"
          >
            <Image 
              src="/icons/r-arrow.svg" 
              alt="Next" 
              width={24} 
              height={15}
            />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="w-full mt-9 md:hidden">
          <div className="flex items-center h-1">
            <div 
              className="bg-[#6A7B61] h-full transition-all duration-200 ease-out"
              style={{ width: `${Math.max(33, scrollProgress * 100)}%` }}
            />
            <div 
              className="bg-primary/10 h-full transition-all duration-200 ease-out"
              style={{ width: `${100 - (scrollProgress * 100)}%` }}
            />
          </div>
        </div>
      </div>

      <Link 
          href="/blog"
          className="h-[50px] w-full bg-primary text-white items-center justify-center hover:opacity-80 uppercase font-tilda-sans font-bold text-[14px] flex md:hidden mt-12"
        >
          больше статей
      </Link>
    </section>
  )
}

export default Blog 
'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between lg:justify-center items-center py-6 px-5 lg:px-24 lg:py-10 relative border-b border-white/10">
        <div className="gap-2.5 hidden lg:flex absolute left-24">
          <Link href="#" className="w-10 h-10">
            <Image 
              src="/icons/vk.svg" 
              alt="VK"
              width={40}
              height={40}
              className="text-white"
            />
          </Link>
          <Link href="#" className="w-10 h-10">
            <Image 
              src="/icons/instagram.svg"
              alt="Instagram"
              width={40} 
              height={40}
            />
          </Link>
        </div>

        <div className='w-[88px] h-[38px] md:w-[148px] md:h-[67px] relative'>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            fill
            priority
          />
        </div>

          <button className="sm:block lg:hidden">
            <Image
              src="/icons/burger.svg"
              alt="burger"
              width={36}
              height={14}
            />
          </button>
      </div>

      <nav className="hidden md:block border-b border-white/10">
        <div className="flex justify-center gap-[105px] py-4">
          <MenuLink text="Салоны" to="/" />
          <MenuLink text="Наша команда" to="/" />
          <MenuLink text="Акции" to="/" />
          <MenuLink text="Обучение" to="/" />
          <MenuLink text="Блога" to="/" />
          <MenuLink text="Контакты" to="/" />
        </div>
      </nav>
    </header>
  )
}

function MenuLink({ text, to }: { text: string, to: string }) {
  return (
    <Link href={to} className="flex items-center gap-1.5 text-white uppercase font-tilda-sans font-bold text-sm hover:underline">
      {text}
    </Link>
  )
}

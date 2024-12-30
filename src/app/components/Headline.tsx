import Header from "./Header";

interface HeadlineProps {
    withInfo?: boolean;
    bgName: string;
}

const infoAddress = {
    title: "адреса салонов",
    address: [
        {
            name: "Железнодорожный",
            address: "Саввинское шоссе, дом 4, корпус 2"
        },
        {
            name: "Саввино",
            address: "ул. Народного ополчения, д. 1"
        },
    ]
};

const infoTime = {
    title: "часы работы",
    time: ["Пн-Пт: 09:00–21:00", "Сб-Вс: 09:30–21:00"]
}

const infoContacts = {
    title: "Контакты",
    contacts: [
        {
            phone: "+7 (906) 081-14-41",
            mail: "firuzanails@gmail.com"
        },
        {
            phone: "+7 (926) 041-14-41",
            mail: "firuzanailstudio@gmail.com"
        }
    ]
}

export default function Headline({ withInfo = false, bgName }: HeadlineProps) {
  return (
    <section 
        className={`
            pb-0 md:pb-20 w-full bg-cover bg-center bg-no-repeat 
            ${bgName ==='main' && "bg-[url('/images/back-main-mob.svg')] md:bg-[url('/images/back-main.svg')]"}
            ${bgName ==='savin' && "bg-[url('/images/back-savin-mob.svg')] md:bg-[url('/images/back-savin.svg')]"}
            ${bgName ==='opolch' && "bg-[url('/images/back-opolch-mob.svg')] md:bg-[url('/images/back-opolch.svg')]"}
        `}
    >
    <Header />
    <div className={`pb-[168px] pt-[218px]  px-5 md:px-0 ${bgName === 'main' ? 'md:py-[120px]' : 'md:py-0 md:pt-20 md:pb-0]'}`}>
      <h1 className='text-white text-center text-[28px] lg:text-6xl font-tenor-sans uppercase px-2 md:px-0 leading-[145%]'>Пространство для тех, кто любит <br /> красоту и ценит качество</h1>
      <div className='flex flex-col md:flex-row justify-center gap-5 items-center mt-[175px] md:mt-20'>
        <button className="bg-primary h-[50px] w-full md:w-60 font-tilda-sans text-white uppercase font-bold text-sm">записаться</button>
        <button className="h-[50px] w-full md:w-60 font-tilda-sans text-white border border-white uppercase font-bold text-sm">посмотреть цены</button>
      </div>
    </div>
    {withInfo && (
        <>
            <div className="hidden md:flex items-start justify-center py-4">
            <div className="flex flex-col gap-y-4 max-w-[336px] w-full">
                <h4 className="text-white text-center uppercase font-tilda-sans font-bold text-sm">{infoAddress.title}</h4>
                {infoAddress.address.map((item, index) => (
                    <div key={index} className="text-center text-white font-tilda-sans text-sm font-light">
                        <p >{item.name}</p>
                        <address className="not-italic">{item.address}</address>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-y-4 max-w-[336px] w-full">
                <h4 className="text-white text-center uppercase font-tilda-sans font-bold text-sm">{infoTime.title}</h4>
                {infoTime.time.map((item, index) => (
                    <div key={index} className="text-center text-white font-tilda-sans text-sm font-light">
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-y-4 max-w-[336px] w-full">
                <h4 className="text-white text-center uppercase font-tilda-sans font-bold text-sm">{infoContacts.title}</h4>
                {infoContacts.contacts.map((item, index) => (
                    <div key={index} className="text-center text-white font-tilda-sans text-sm font-light flex flex-col">
                        <a href={`tel:${item.phone}`}>{item.phone}</a>
                        <a href={`mailto:${item.mail}`} className="underline">{item.mail}</a>
                    </div>
                ))}
            </div>
            </div>
        </>
    )}
  </section>
  )
}
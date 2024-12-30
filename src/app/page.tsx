'use client'
import Headline from './components/Headline'
import Services from './components/Services'
import Advantages from './components/Advantages'
import MastersGallery from './components/MastersGallery'
import AboutUs from './components/AboutUs'
import Promotions from './components/Promotions'
import SalonGallery from './components/SalonGallery'
import Benefits from './components/Benefits'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Headline withInfo={true} bgName='main' />
      <Services />
      <Advantages />
      <MastersGallery />
      <AboutUs />
      <Promotions />
      <SalonGallery />
      <Benefits />
      <Blog />
      <Footer />
    </main> 
  );
}












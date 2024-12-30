'use client'
import Headline from '../components/Headline'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import MastersSection from '../components/MastersSection'

export default function Home() {
  return (
    <main>
      <Headline withInfo={false} bgName='savin' />
      <AboutUs />
      <Services />
      <MastersSection />
      <Footer />
    </main> 
  );
}












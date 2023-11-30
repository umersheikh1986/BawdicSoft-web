import HeroSection from '@/components/heoSection'
import Navbar from '@/components/navbar'
import OfferSection from '@/components/offer'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <OfferSection  />
    </>
  )
}

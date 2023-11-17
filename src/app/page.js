import Card from '@/components/Card/Card'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import TopRated from '@/components/TopRated/TopRated'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
     
      <Hero />
      <Card/>
      <TopRated/>
      {/* <h1 className='text-3xl'>Home Page</h1> */}

    </main>
  )
}

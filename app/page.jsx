'use client'
import Cta from '@/components/custom/Cta'
import Hero from '@/components/custom/Hero'
import Categories from '@/components/custom/Categories'
import FeaturedSellers from '@/components/custom/FeaturedSellers'
import FeaturedProducts from '@/components/custom/FeaturedProducts'
import Footer from '@/components/custom/Footer'

function HomePage() {
  return (
    <div className='space-y-10'>
      <Hero/>
      <FeaturedSellers/>
      <Categories/>
      <FeaturedProducts/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default HomePage
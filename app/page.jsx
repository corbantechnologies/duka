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
      <Cta/>
      <FeaturedSellers/>
      <Categories/>
      <FeaturedProducts/>
      <Footer/>
    </div>
  )
}

export default HomePage
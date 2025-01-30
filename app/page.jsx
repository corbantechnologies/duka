import Cta from '@/components/custom/Cta'
import Hero from '@/components/custom/Hero'
import Categories from '@/components/custom/Categories'
import FeaturedSellers from '@/components/custom/FeaturedSellers'
import FeaturedProducts from '@/components/custom/FeaturedProducts'

function HomePage() {
  return (
    <div className='space-y-8'>
      <Hero/>
      <Cta/>
      <FeaturedSellers/>
      <Categories/>
      <FeaturedProducts/>
    </div>
  )
}

export default HomePage
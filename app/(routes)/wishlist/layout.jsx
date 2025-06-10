import Footer from '@/components/custom/Footer'
import MainNavbar from '@/components/custom/MainNavbar'

function WishListLayout({children}) {
  return (
    <div>
         <MainNavbar/>
         <div className="pt-[80px] relative min-h-screen ">{children}</div>
         <Footer/>
    </div>
  )
}

export default WishListLayout
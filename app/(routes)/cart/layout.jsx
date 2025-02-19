import Footer from '@/components/custom/Footer'
import MainNavbar from '@/components/custom/MainNavbar'

function CartLayout({children}) {
  return (
    <div>
         <MainNavbar/>
         <div className="pt-[70px] relative min-h-screen ">{children}</div>
         <Footer/>
    </div>
  )
}

export default CartLayout
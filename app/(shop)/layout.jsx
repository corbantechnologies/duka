import Footer from "@/components/custom/Footer";
import MainNavbar from "@/components/custom/MainNavbar";

export default function BlogLayout({ children }) {
    return (
    <div>
        <MainNavbar/>
        <div className="pt-[70px]">
        {children}
        </div>
        <Footer/>
    </div>
)
  }
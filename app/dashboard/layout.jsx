import Navbar from "./components/Navbar";

export default function SetupLayout({children}) {

  return (
    <div className="">
            <Navbar/>
            {children}
    </div>
  )
}

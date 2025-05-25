import Navbar from "./components/Navbar"

const layout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar/>
        <div className="flex-grow flex">{children}</div>
    </div>
  )
}

export default layout
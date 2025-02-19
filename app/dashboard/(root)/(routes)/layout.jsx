"use client"

import CreateStoreNavbar from "./components/navbar"
import CreateStoreSidebar from "./components/sidebar"

export default function CreateStore({children}) {
  return (
    <main className="h-screen overflow-hidden flex flex-col bg-slate-100 gap-4 p-4">
    <CreateStoreNavbar/>
      <div className='flex-grow overflow-y-auto flex gap-4'>
          <CreateStoreSidebar/>
          <div className='overflow-y-scroll flex-grow bg-white p-4 rounded-lg overflow-hidden'>
              <div>{children}</div>
          </div>
      </div>
    </main>
  )
}


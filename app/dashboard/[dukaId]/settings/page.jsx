'use client';
import { Button } from "@/components/ui/button"
import { Heading } from "../components/Heading"
import { useState } from "react";
import AccountSettings from "./components/account";
import StoreSettings from "./components/store";
import BackButton from "@/components/custom/BackButton";

const settings = [
  'Account',
  'Store'
]

function Settings() {
  const [selected, setSelected] = useState('Account')
  return (
    <div>
      <BackButton/>
      <div className="flex justify-between mb-4">
      <Heading title="Settings" description="Manage your profile and store settings here." />
      <Button>Upgrade</Button>
      </div>
      <hr />
      <ul className="flex mt-4 bg-slate-100 w-fit rounded-full p-1 text-black">
        {settings.map((item)=>(
          <li key={item} 
          className={`px-4 py-1 cursor-pointer rounded-full ${selected === item ? 'bg-white text-black ' : ''}`}
          onClick={()=>setSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <section className="mt-4">
        {selected === 'Account' 
        ?
        <AccountSettings/>
        :
        selected === 'Store'
        ?
        <StoreSettings/>
        :
        null
       }
      </section>
    </div>
  )
}

export default Settings
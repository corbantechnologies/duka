import { Button } from "@/components/ui/button"
import AccountSettings from "./components/account";

function Settings() {
  return (
    <div>
      <div className="flex justify-between mb-4">
      <div>
        <h1 className="text-xl md:text-3xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your profile settings here</p>
      </div>
      <Button>Upgrade</Button>
      </div>
      <hr />
      <AccountSettings/>
    </div>
  )
}

export default Settings
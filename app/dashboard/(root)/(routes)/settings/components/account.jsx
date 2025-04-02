'use client';

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFetchUser } from "@/hooks/accounts/actions";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trash } from "lucide-react";

function AccountSettings() {
  const { data: account } = useFetchUser();
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    newPassword: "",
    currentPassword: "",
  });
  const [file, setFile] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  useEffect(() => {
    if (account) {
      setFormValues({ ...account, newPassword: "", currentPassword: "" });
    }
  }, [account]);
  const getInitials = () => {
    if (!account) return "";
    const firstInitial = account.first_name ? account.first_name.charAt(0) : "";
    const lastInitial = account.last_name ? account.last_name.charAt(0) : "";
    return (firstInitial + lastInitial).toUpperCase();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleAvatarChange = (e) => {
    setFormValues((prev) => ({ ...prev, avatar: e.target.files[0] }));
    setFilePreview(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("To be implamented");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <h2 className='font-semibold mb-1 text-lg'>Profile photo</h2>
            <div className='flex justify-between items-center'>
            {filePreview !== null ? (
              <img
                src={filePreview}
                alt="Preview"
                className="size-16 ml-2 rounded-full object-cover"
              />
            ) : (
              <Avatar className="h-16 md:h-20 w-16 md:w-20">
                <AvatarImage src={account?.avatar} className="object-cover"/>
                <AvatarFallback className="bg-primary md:text-2xl text-white">
                  {getInitials()}
                </AvatarFallback>
              </Avatar>
            )}
            <Button variant="destructive">
              <Trash/>
            </Button>
            </div>
            <label
              htmlFor="avatar"
              className="bg-blue-50 mt-5 border border-primary cursor-pointer border-dashed rounded-xl w-full lg:w-1/2 p-6 grid place-content-center"
            >
              <div className="flex justify-center">
                <img
                  src="/image-placeholder.svg"
                  alt="placeholder"
                  className="w-12"
                />
              </div>
              <p>Upload or change your picture</p>
            </label>
            <input
              type="file"
              style={{ display: "none" }}
              id="avatar"
              accept="/image/*"
              name="avatar"
              onChange={handleAvatarChange}
            />
          </div>
        </div>
        <div className="mt-5 mb-5">
          <h2 className="font-semibold text-lg">Full name</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="first_name">First name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={formValues?.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="last_name">Last name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={formValues?.last_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-5 mb-5">
          <h2 className="font-semibold text-lg">Contact information</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={formValues?.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                name="phone"
                value={formValues?.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-5 mb-5">
          <h2 className="font-semibold text-lg">Password</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="currentPassword">Current password</Label>
              <Input
                id="currentPassword"
                name="currentPassword"
                type="password"
                placeholder="********"
                value={formValues?.currentPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="newPassword">New password</Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="********"
                value={formValues?.newPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <Button>Update</Button>
      </form>
    </div>
  );
}

export default AccountSettings;

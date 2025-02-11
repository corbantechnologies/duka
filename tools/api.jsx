import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default axios?.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const urlActions = axios?.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const urlMultipartActions = axios?.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: true,
});

export const signUpVendor = async (values) => {
  await urlActions?.post(`/api/auth/signup/vendor/`, values);
};

export const signUpCustomer = async (values) => {
  await urlActions?.post(`/api/auth/signup/customer/`, values);
};

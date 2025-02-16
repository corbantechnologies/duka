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

export const createStore = async (values, axiosAuth) => {
  try {
    const {data} = await urlMultipartActions.post(`/api/shops/`, values, axiosAuth);
    return data;
    
  } catch (error) {
    console.log('Error creating store', error)
    return error;
  }
}

export const getShops = async (axios) => {
  try {
    const {data} = await urlMultipartActions.get("/api/shops/list", axios);
    return data.results;
  } catch (error) {
    console.log('Error fetching shops', error)
    return error;
  }
};

export const getSingleShop = async (dukaId, axiosAuth) => {
  try {
    const {data} = await urlMultipartActions.get(`/api/shops/${dukaId}`, axiosAuth);
    return data;
  } catch (error) {
    console.log('Error fetching shops', error)
    return error;
  }
};

export const getCategories = async (axios) => {
  try {
    const {data} = await urlMultipartActions.get("/api/categories/list", axios);
    return data.results;
  } catch (error) {
    console.log('Error fetching categories', error)
    return error;
  }
};

export const createProduct = async (values, axiosAuth) => {
  try {
    const {data} = await urlMultipartActions.post(`/api/products/`, values, axiosAuth);
    return data;
    
  } catch (error) {
    console.log('Error creating product', error)
    return error;
  }
};

export const getProducts = async (axiosAuth) => {
  try {
    const {data} = await urlMultipartActions.get("/api/products/", axiosAuth);
    return data.results;
  } catch (error) {
    console.log('Error fetching products', error)
    return error;
  }
};

export const getSingleProduct = async (slug, axiosAuth) => {
  try {
    const {data} = await urlMultipartActions.get(`/api/products/${slug}/`, axiosAuth);
    return data.results;
  } catch (error) {
    console.log('Error fetching categories', error)
    return error;
  }
};
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

export const getAllShops = async () => {
  try {
    const {data} = await urlMultipartActions.get("/api/shops/list/");
    return data.results;
  } catch (error) {
    console.log('Error fetching shops', error)
    return error;
  }
};

export const getSellerShops = async (axiosAuth) => {
  try {
    const {data} = await urlMultipartActions.get("/api/shops/", axiosAuth);
    return data.results;
  } catch (error) {
    console.log('Error fetching shops', error)
    return error;
  }
};

export const getSingleShop = async (dukaId) => {
  try {
    const {data} = await urlMultipartActions.get(`/api/shops/detail/${dukaId}`);
    return data;
  } catch (error) {
    console.log('Error fetching shop', error)
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
    const response = await urlMultipartActions.post(`/api/products/`, values, axiosAuth);
    if (response.status === 201) {
      return { success: true };
    }
  } catch (error) {
    console.log('Error creating product', error)
    return error;
  }
};

export const updateProduct = async (slug, values, axiosAuth) => {
  try {
    const {data} = await urlMultipartActions.patch(`/api/products/${slug}/`, values, axiosAuth);
    return data;
  } catch (error) {
    console.log('Error updating product', error)
    throw error
  }
};

export const deleteProduct = async (slug, axiosAuth) => {
  try {
    const response = await urlMultipartActions.delete(`/api/products/${slug}/`, axiosAuth);
    if (response.status === 204) {
      return { success: true };
    }
  } catch (error) {
    console.log('Error deleting product', error)
    throw error
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
    const { data } = await urlMultipartActions.get(`/api/products/${slug}/`, axiosAuth);
    return data;
  } catch (error) {
    console.error('Error fetching single product:', error);
    throw error;
  }
};

export const followShop = async (axiosAuth) => {
  try {
    const response = await urlActions.post(`/api/follow/`, axiosAuth);
    if (response.status === 201) {
      return { success: true };
    }
  } catch (error) {
    console.log('Could not follow shop', error)
    return error;
  }
};

export const getFollowedShops = async (axiosAuth) => {
  try {
    const {data} = await urlActions.get(`/api/follow/`, axiosAuth);
    return data;
  } catch (error) {
    console.log('Could not fetch followed shops', error)
    return error;
  }
};
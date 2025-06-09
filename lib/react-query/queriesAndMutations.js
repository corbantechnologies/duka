import{
  useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
    // useQuery,
    // useQueryClient,
    // useInfiniteQuery,
}from '@tanstack/react-query'
import { QUERY_KEYS } from './queryKeys'
import { createOrder, createProduct, createStore, createUserCart, deleteProduct, followShop, getAllShops, getCartItems, getCategories, getSingleProduct, getSingleProductPublic, getSingleShop, getSingleShopProducts, initializePayment, updateProduct } from '@/tools/api'

export const useCreateStore = ()=>{
    return useMutation({
        mutationFn:(data)=> createStore(data.values, data.axiosAuth)
    })
}
export const useGetCategories = (axios)=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_CATEGORIES],
        queryFn:()=> getCategories(axios),
      });
}
export const useCreateProduct = ()=>{
    return useMutation({
        mutationFn:(data)=> createProduct(data.values, data.axiosAuth)
    })
}
export const useUpdateProduct = ()=>{
    return useMutation({
        mutationFn:(data)=> updateProduct(data.slug, data.values, data.axiosAuth)
    })
}

export const useDeleteProduct = ()=>{
    return useMutation({
        mutationFn:(data)=> deleteProduct(data.slug, data.axiosAuth)
    })
}

export const useGetShops = ()=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_SHOPS],
        queryFn:()=> getAllShops(),
      });
}

export const useGetSingleShopProducts = (dukaId)=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_SINGLE_SHOP],
        queryFn:()=> getSingleShopProducts(dukaId),
      });
}

export const useGetSingleShopPublic = (shopId)=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_SINGLE_SHOP],
        queryFn:()=> getSingleShop(shopId),
        enabled:!!shopId,
      });
}

export const useFollowShop = () =>{
    return useMutation({
        mutationFn:(axiosAuth)=> followShop(axiosAuth)
    })
}
// cart hooks
export const useGetCartItems = (axiosAuth)=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USER_CART],
        queryFn:()=> getCartItems(axiosAuth),
      });
}
export const useCreateUserCart = ()=>{
    return useMutation({
        mutationFn:(data)=> createUserCart(data.values, data.axiosAuth)
    })
}
// end of cart hooks

// orders hooks
export const useCreateOrder = ()=>{
    return useMutation({
        mutationFn:(data)=> createOrder(data.value, data.axiosAuth)
    })
}
// end of orders hooks

// payment hooks
export const useInitializePayment = ()=>{
    return useMutation({
        mutationFn:(data)=> initializePayment(data.value, data.axiosAuth)
    })
}
// end of payment hooks

// get single product details
export const useGetSingleProductDetails = (productId)=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_SINGLE_PRODUCT],
        queryFn:()=> getSingleProductPublic(productId),
        enabled:!!productId,
      });
}
// end of get single product details
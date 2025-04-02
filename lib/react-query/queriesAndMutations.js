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
import { createProduct, createStore, deleteProduct, followShop, getAllShops, getCategories, getSingleShop, updateProduct } from '@/tools/api'

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



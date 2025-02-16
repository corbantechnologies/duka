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
import { createProduct, createStore, getCategories } from '@/tools/api'

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



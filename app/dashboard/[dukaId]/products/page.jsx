'use client';

import {format} from 'date-fns';
import { ProductClient } from "./components/client";
import { formatter } from '@/lib/utils';
import { getCategories, getProducts } from '@/tools/api';
import { useQuery } from '@tanstack/react-query';
import useAxiosAuth from '@/hooks/general/useAxiosAuth';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';

const ProductsPage = () => {

  const axiosAuth = useAxiosAuth()
  const router = useRouter()
  const {dukaId} = useParams()

  const {
    data: categories,
  } = useQuery({
    queryKey: ["getCategories"],
    queryFn: () => getCategories(),
  });
  const {
    data: products,
    isPending,
    isError
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => getProducts(axiosAuth),
  });

  if(isPending){
    return <Loader2 className='animate-spin'/>
  }
  if(isError){
    toast.error('An error occurred while fetching products. Please try again later.')
    router.replace(`/dashboard/${dukaId}`)
  }
  
  const formattedProducts = products?.map((item) => ({
    id: item.id,
    name: item.name,
    isActive: item.is_active,
    description: item.description,
    discount: item.discount,
    discounted_price: formatter.format(item?.discounted_price),
    price: formatter.format(item?.price),
    stock: item.stock,
    slug:item.slug
  }));
  return(
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} categories={categories} />
      </div>
    </div>
  );
};

export default ProductsPage;
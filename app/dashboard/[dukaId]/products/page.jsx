'use client';

import { ProductClient } from "./components/client";
import { formatter } from '@/lib/utils';
import { getCategories, getSingleShop } from '@/tools/api';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import useActiveStore from '@/hooks/use-active-store';

const ProductsPage = () => {
  const activeStore = useActiveStore()
  const {
    data: shop,
    isPending,
  } = useQuery({
    queryKey: ["getSingleShop", activeStore.storeId],
    queryFn: () => getSingleShop(activeStore.storeId),
    enabled: !!activeStore.storeId,
  });
  const {
    data: categories,
  } = useQuery({
    queryKey: ["getCategories"],
    queryFn: () => getCategories(),
  });

  if(isPending){
    return <Loader2 className='animate-spin'/>
  }
  const formattedProducts = shop?.products ? 
  shop?.products?.map((item) => ({
    id: item.id,
    name: item.name,
    isActive: item.is_active,
    description: item.description,
    discount: item.discount,
    discounted_price: formatter.format(item?.discounted_price),
    price: formatter.format(item?.price),
    stock: item.stock,
    slug:item.slug
  }))
  :[];
  return(
    <div className="flex-col">
      <div className="flex-1 space-y-4 md:p-8 md:pt-6">
        <ProductClient data={formattedProducts} categories={categories} />
      </div>
    </div>
  );
};

export default ProductsPage;
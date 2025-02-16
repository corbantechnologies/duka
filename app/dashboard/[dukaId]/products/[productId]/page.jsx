'use client';

import { getCategories } from "@/tools/api";
import { ProductForm } from "./components/ProductForm";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import useAxiosAuth from "@/hooks/general/useAxiosAuth";
import { Loader2 } from "lucide-react";

const ProductPage = () => {
  const {productId} = useParams()
  const axiosAuth = useAxiosAuth()
  const {
    data: product,
    isPending: productFetchPending
  } = useQuery({
    queryKey: ["getSingleProduct"],
    queryFn: () => getSingleProduct(productId, axiosAuth),
  });

  const {
    data: categories,
  } = useQuery({
    queryKey: ["getCategories"],
    queryFn: () => getCategories(),
  });
  console.log(product)

  if(productFetchPending){
    return <Loader2 className="animate-spin" />;
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-6">
        <ProductForm categories={categories} initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;

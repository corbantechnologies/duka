"use client";

import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import ProductList from "@/components/custom/ProductList";
import { QUERY_KEYS } from "@/lib/react-query/queryKeys";
import { getCartItems } from "@/tools/api";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/general/useAxiosAuth";
import { useCreateUserCart } from "@/lib/react-query/queriesAndMutations";
import toast from "react-hot-toast";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const { status } = useSession();
  const axiosAuth = useAxiosAuth();
  const {
    data: dbCartItems,
    isPending: fetchingCart,
    isError: cartFetchError,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_USER_CART],
    queryFn: () => getCartItems(axiosAuth),
    enabled: status === "authenticated",
  });
  const { mutateAsync: createCart } = useCreateUserCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    createUserCart();
  }, [dbCartItems]);

  const createUserCart = async () => {
    if (!fetchingCart && !cartFetchError) {
      if (dbCartItems.items.length === 0) {
        const data = {
          values: {
            // product_reference: cart.items[0].reference,
            product_reference: '4AASP7ANUC',
            quantity: cart.items[0].quantity,
          },
          axiosAuth: axiosAuth,
        };
        const result = await createCart(data);
        if (result?.success) {
          toast.success("Synchronized your cart successfully", {
            id: "createsuccess",
          });
        } else {
          toast.error("Failed to create cart. Please try again.");
        }
      } else {
        // const mergedCart = mergeCarts(dbCartItems.items, cart);
        console.log('for updating');
      }
    }
  };
  // function mergeCarts(databaseCart, localCart) {
  //   const mergedCart = [...databaseCart];
  //   for (const localItem of localCart) {
  //     const existingDbItem = mergedCart.find(
  //       (dbItem) => dbItem.reference === localItem.reference
  //     );
  //     if (existingDbItem) {
  //       //use local item quantity as the source of  truth. 
  //       // Local and db cart are always in sync as long as user is logged in, so any disparity means a change was made while logged out, thus the local cart details are the most recent updates by user
  //       existingDbItem.quantity = localItem.quantity;
  //     } else {
  //       mergedCart.push(localItem);
  //     }
  //   }
  //   return mergedCart;
  // }

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Shopping Cart
        </h1>
        <div className="mt-8 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && (
              <p className="mt-2 text-sm text-gray-500">
                You have no items added to your cart.
              </p>
            )}
            <ul>
              {cart.items.map((item) => {
                if (!item.product || !item.product.id) {
                  console.error("Cart item has an undefined product:", item);
                  return null;
                }

                return <CartItem key={item.product.id} data={item} />;
              })}
            </ul>
          </div>
          <Summary />
        </div>
        <p className="text-xl font-semibold my-5 leading-tight text-gray-900">
          You might also like
        </p>
        <ProductList />
      </div>
    </div>
  );
};

export default CartPage;

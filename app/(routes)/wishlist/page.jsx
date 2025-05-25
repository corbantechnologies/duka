'use client';

import useWishlist from "@/hooks/use-wishlist";
import { useEffect, useState } from "react";
import WishListProducts from "./components/WishListProducts";

const WishlistPage = () => {
    const wishlist = useWishlist();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    console.log(wishlist)

    if (!isMounted) {
        return null;
    }

    return (
        <div className="mx-auto max-w-7xl">
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                {wishlist.items.length > 0 ? (
                    <WishListProducts title="Your Wishlist" items={wishlist.items} />
                ) : (
                    <div className="text-center">
                        <h2 className="font-bold text-2xl mb-3">Your Wishlist</h2>
                        <p className="font-medium text-gray-700">
                            No items in your wishlist yet.
                        </p>
                        <p className="text-sm text-gray-500">
                            Add items to your wishlist to quickly access them.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;

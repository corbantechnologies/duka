import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity) => {
        if (!product || !product.id) {
          console.error("Invalid product:", product);
          toast.error("Unable to add item to cart. Invalid product.");
          return;
        }
      
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.product.id === product.id);
      
        if (existingItem) {
          toast('Item is already in cart');
          return;
        }

        const productWithPriceAsNumber = { ...product, price: Number(product.discount ? product.discounted_price :product.price) };

        if (isNaN(productWithPriceAsNumber.price)) {
          console.error("Invalid price for product:", productWithPriceAsNumber);
          return;
        }
      
        set({ items: [...currentItems, { product: productWithPriceAsNumber, quantity }] });
        toast.success('Item added to cart', { id: 'success' });
      },
      
      updateItemQuantity: (id, quantity) => {
        set({
          items: get().items.map((item) =>
            item.product.id === id ? { ...item, quantity } : item
          ),
        });
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.product && item.product.id !== id),
        });
        toast.success('Item removed from cart', { id: 'success2' });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

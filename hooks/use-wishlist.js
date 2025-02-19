import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useWishlist = create(
    persist((set, get) => ({
        items: [],
        addItem: (data) => {
            const currentItem = get().items;
            const existingItem = currentItem.find((item) => item.id === data.id);

            if(existingItem) return toast('Item is already in wishlist')
            set({ items: [...get().items, data] });
        toast.success('Item added to wishlist',{id:'success'});
        },
        removeItem: (id) => {
            set({ items: [...get().items.filter((item) => item.id!== id)] });
            toast.success('Item removed from wishlist',{id:'success2'});
        },
        removeAll: () => set({ items: []})
    }),
    {
        name: 'wishlist-storage',
        storage: createJSONStorage(()=>localStorage)
    })
)

export default useWishlist;
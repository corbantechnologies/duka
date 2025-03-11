import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useActiveStore = create(
    persist((set) => ({
        storeId: null,
        storeName:null, 
        setStoreId: (id) => set({ storeId: id }),
        setStoreName: (name) => set({ storeName: name }),
    }),
    {
        name: 'storeId-storage',
        storage: createJSONStorage(() => localStorage)
    })
);

export default useActiveStore;
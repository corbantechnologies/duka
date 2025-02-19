import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useActiveStore = create(
    persist((set) => ({
        storeId: null, 
        setStoreId: (id) => set({ storeId: id }),
    }),
    {
        name: 'storeId-storage',
        storage: createJSONStorage(() => localStorage)
    })
);

export default useActiveStore;
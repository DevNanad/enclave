import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useUserAuthStore = create(
  persist(
    (set) => ({
      userData: null,
      token: null,
      setuserData: (userData) => set({ userData }),
      setToken: (token) => set({ token }),
      reset: () => set({ userData: null, token: null })
    }),
    {
      name: "userAuth", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
)

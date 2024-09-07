import { create } from "zustand"
import { persist } from "zustand/middleware"
import {useEffect, useState} from "react"

export const useFavoritesStore = create(
    persist(
        (set) => ({
            favorites: [],
            addToFavorites: (product) => set((state) => ({
                favorites: [...state.favorites, product],
            })),

            removeFromFavorites: (productId) => set((state) => ({
                favorites: state.favorites.filter((item) => item.productId !== productId),
            })),
        }),
        {
            name: "favorites-storage", // نام کلید ذخیره‌سازی در localStorage
            // از localStorage فقط در کلاینت استفاده کنید
            getStorage: () => (typeof window !== "undefined" ? localStorage : null),
        }
    )
)

// اطمینان حاصل کنید که این بخش فقط در کلاینت اجرا می‌شود
export function useIsHydrated() {
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    return hydrated
}



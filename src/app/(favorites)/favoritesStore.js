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
            name: "favorites-storage",

            getStorage: () => (typeof window !== "undefined" ? localStorage : null),
        }
    )
)


export function useIsHydrated() {
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    return hydrated
}



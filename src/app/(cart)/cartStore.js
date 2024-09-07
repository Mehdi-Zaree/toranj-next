import { create } from "zustand"
import { persist } from "zustand/middleware"
import {useEffect, useState} from "react"

export const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            totalPrice: 0,
            totalItem:0,
            addToCart: (product) => {
                set((state) => {
                    const existingProduct = state.cart.find((item) => item.id === product.productId)

                    if (existingProduct) {
                        const updatedCart = state.cart.map((item) =>
                            item.id === product.productId
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        )
                        return {
                            cart: updatedCart,
                            totalPrice: state.totalPrice + product.price,
                            totalItem: state.totalItem+1
                        }
                    } else {
                        const newProduct = {
                            id: product.productId,
                            name: product.productName,
                            price: product.price,
                            image: product.productImage,
                            quantity: 1,
                        }
                        return {
                            cart: [...state.cart, newProduct],
                            totalPrice: state.totalPrice + product.price,
                            totalItem: state.totalItem+1
                        }
                    }
                })
            },

            quantityPlus: (productId) => {
                set((state) => {
                    const product = state.cart.find((item) => item.id === productId)
                    if (product) {
                        const updatedCart = state.cart.map((item) =>
                            item.id === productId
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        )
                        return {
                            cart: updatedCart,
                            totalPrice: state.totalPrice + product.price,
                            totalItem:state.totalItem+1
                        }
                    }
                })
            },

            quantityMinus: (productId) => {
                set((state) => {
                    const product = state.cart.find((item) => item.id === productId)
                    if (product && product.quantity > 1) {
                        const updatedCart = state.cart.map((item) =>
                            item.id === productId
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        )
                        return {
                            cart: updatedCart,
                            totalPrice: state.totalPrice - product.price,
                            totalItem:state.totalItem -1
                        }
                    } else if (product && product.quantity === 1) {
                        const updatedCart = state.cart.filter((item) => item.id !== productId)
                        return {
                            cart: updatedCart,
                            totalPrice: state.totalPrice - product.price,
                            totalItem: state.totalItem - 1
                        }
                    }
                })
            },
            removeFromCart: (productId) => {
                set((state)=>{
                    const selectedProduct = state.cart.find((item)=> item.id === productId)
                    if(selectedProduct){
                       const updatedCart = state.cart.filter((item)=> item.id !== productId)
                        return{
                            cart:updatedCart,
                            totalPrice : state.totalPrice - selectedProduct.price*selectedProduct.quantity,
                            totalItem: state.totalItem - selectedProduct.quantity
                        }
                    }
                })
            },
        }),
        {
            name: "cart-storage",
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

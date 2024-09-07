import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons'


import {useFavoritesStore} from "@/app/(favorites)/favoritesStore";

const FavoriteIcon = ({ product }) => {
    const { favorites, addToFavorites, removeFromFavorites } = useFavoritesStore()
    const isFavorite = favorites.some((item) => item.productId === product.productId)

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFromFavorites(product.productId)
        } else {
            addToFavorites(product)
        }
    }

    return (
        <button onClick={handleFavoriteClick} className={'border w-14 h-14 rounded-2xl flex items-center justify-center '}>
            <FontAwesomeIcon icon={isFavorite ? faHeart : faHeartBroken} className={` text-2xl ${isFavorite?'text-[#faa631]':'text-gray-200'}`}/>
        </button>
    )
}

export default FavoriteIcon

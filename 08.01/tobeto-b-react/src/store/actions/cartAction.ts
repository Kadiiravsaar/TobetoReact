export const addToCart = (product: any) => {
    // tanım
    // type => Aksiyon adı
    // payload => eğer varsa argüman adı
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

export const removeToCart = (product: any) => {
    return {
        type: "REMOVE_TO_CART",
        payload: product
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}

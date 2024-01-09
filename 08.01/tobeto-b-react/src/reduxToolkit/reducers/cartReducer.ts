// state => deponun o anki durumu
// action => tetiklenen aksiyon bilgileri


const initialState = {
    cartItems: []

}
export const cartReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // state.cartItems.push(action.payload)
            let newState = {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };

            return newState;

        case "REMOVE_TO_CART":

            return {
                ...state,
                cartItems: state.cartItems.filter((i: any) => i.id !== action.payload.id)

            };

        case "CLEAR_CART":

            break;

        default:
            return state;
    }

};
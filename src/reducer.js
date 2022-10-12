export const initalState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)
// otherway to sum the basket price
// getBasketTotal = (basket) => {
//     var sum = 0
//     for (var i = 0; i < basket.length; i++) {
//         sum += basket[i].price
//     }
//     return sum
// }

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            else {
                console.warn(`cant remove product (id:${action.id}) as it is not in basket!!`)
            }
            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }


        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }
        default:
            return state
    }
}

export default reducer;
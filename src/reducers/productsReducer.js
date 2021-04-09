import { types } from "../types/types";


const initialState = {
    products: [{
        id: new Date().getTime(),
        name: 'PS4',
        price: '499$',
        description: 'lorem ipsum',
        rate: 'five star',
        date: new Date().getTime()
    }],
    activeProduct: {
        id: new Date().getTime(),
        name: 'PS4',
        price: '499$',
        description: 'lorem ipsum',
        rate: 'five star',
        date: new Date().getTime()
    }
}

export const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.productAddNew:
            return {
                
            }

        case types.productLoad:
            return {
                ...state,
                /* products: [...action.payload] */
            }

        default:
            return state;
    }
}
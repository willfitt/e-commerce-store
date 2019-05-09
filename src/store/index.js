import { createStore, combineReducers } from 'redux'

function cartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newCartItems = [...state]
            newCartItems.push(
                action.cartItems
            )
            return newCartItems
        case 'INCREASE_QUANTITY':
            // LOGIC
            return  state
        case 'DECREASE_QUANTITY':
            // LOGIC
            return  state
        case 'REMOVE_ITEM':
            // return state.cartItems.filter(item => action.cartItems.id !== state.id)  
            let removedStore = [...state]
            removedStore = []
            return removedStore
        default:
            return state
    }
}

function userReducer(state = "", action) {
    switch (action.type) {
        case 'LOGIN':
            // LOGIC
            return state
        default:
            return state
    }
}

function productsReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_ITEMS':
            return action.productItems
        default: 
            return state
    }
}

const reducer = combineReducers({
   cartItems: cartReducer,
   user: userReducer,
   products: productsReducer
})

const store = createStore(reducer)

export default store
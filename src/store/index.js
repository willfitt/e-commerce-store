import { createStore, combineReducers } from 'redux'

function cartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newCartItems = [...state]
            newCartItems.push({
                
            })
            return state
        case 'INCREASE_QUANTITY':
                // LOGIC
                return  state
        case 'DECREASE_QUANTITY':
                // LOGIC
                return  state
        case 'REMOVE_QUANTITY':
                // LOGIC
                return state    
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
        case 'ADD_ITEMS':
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
import { createStore, combineReducers } from 'redux'

function cartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newCartItems = [...state]
            if(!newCartItems.some(arr => arr['id'] === action.id)){
                newCartItems.push(
                    action.cartItems
                )
                console.log('id', action.cartItems.id)
            }
            return newCartItems
        case 'INCREASE_QUANTITY':
            let incItems = [...state]
            let incItem = incItems.find(cartItem => cartItem.id === action.id)
            let incQuantity = incItem.quantity + 1 
            let incQtyItem = Object.assign({}, incItem, { quantity: incQuantity })
            let incQtyItemArr = [incQtyItem]
            let incUpdatedState = incItems.map(newQty => incQtyItemArr.find(n => n.id === newQty.id) || newQty)
            return incUpdatedState
        case 'DECREASE_QUANTITY':
            let decItems = [...state]
            let decItem = decItems.find(cartItem => cartItem.id === action.id)
            if (decItem.quantity === 0) {
                return state
            }else {
                let decQuantity = decItem.quantity - 1
                let decQtyItem = Object.assign({}, decItem, { quantity: decQuantity })
                let decQtyItemArr = [decQtyItem]
                let decUpdatedState = decItems.map(newQty => decQtyItemArr.find(n => n.id === newQty.id) || newQty)
                return decUpdatedState
            }
        case 'REMOVE_ITEM':            
            return state.filter(cartItem => cartItem.id !== action.id)
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
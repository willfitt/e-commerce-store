import { createStore, combineReducers } from 'redux'

function SOMETHINGReducer(state = '', action) {
    switch (action.type) {
        case 'SOME_CASE':
            return SOMETHING
        default:
            return state
    }
}

function SOMETHINGReducer(state = [], action) {
    switch (action.type) {
        case 'SOME_CASE':
          
            return  SOMETHING
        case 'DELETE_MESSAGE':
            return  SOMETHING

        default:
            return state
    }
}

const reducer = combineReducers({
   
})

const store = createStore(reducer)

export default store
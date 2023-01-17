const redux = require('redux')
const reduxLogger = require('redux-logger')
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const createStore = redux.createStore
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = 'BUY_ICECREAM'

// action 
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action',
    }
}

function buyIceream() {
    return {
        type: BUY_ICECREAM,
        info: 'second redux action',
    }
}

// const initialState = {
//     numberOfCake: 10,
//     numberOfIcecream: 20
// }

const initialCakeState = {
    numberOfCake: 10,
}

const initialIcecreamState = {
    numberOfIcecream: 20,
}

// const reducer = (state=initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE:return {
//             ...state,
//             numberOfCake: state.numberOfCake -1
//         }

//         case BUY_ICECREAM:return {
//             ...state,
//             numberOfIcecream: state.numberOfIcecream -1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE:return {
            ...state,
            numberOfCake: state.numberOfCake -1
        }
        default: return state
    }
}

const icecreamReducer = (state=initialIcecreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:return {
            ...state,
            numberOfIcecream: state.numberOfIcecream -1
        }

        default: return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: icecreamReducer,
})

// const store = createStore(reducer)
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('InitialState', store.getState())
// const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()))
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceream())
store.dispatch(buyIceream())

unsubscribe()
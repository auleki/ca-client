import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jsonData from '../../utils/data.json'

export const initialState = {
    loading: false,
    hasErrors: false,
    cartItems: [],
    products: [],
    price: 0,
    items: 0
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        resetCart: state => {
            state.cartItems = []
            state.price = 0
            state.items = 0
        },
        addToCart: (state, { payload }) => {
            console.log('PL FROM - RTK', payload)
            // eslint-disable-next-line
            const productItem = state.products.find(
                prod => prod.name === payload.name
            )

            const inCart = state.cartItems.find(item =>
                item.name === payload.name ? true : false
            )

            return {
                ...state,
                cartItems: inCart
                    ? state.cartItems.map(item =>
                        item.name === payload.name ? { ...item, qty: item.qty + 1 } : item
                    )
                    : [...state.cartItems, { ...payload, qty: 1 }]
            }
        },
        loadCart: (state, { payload }) => {
            state.cartItems = payload
            state.hasErrors = false
            state.loading = false
        },
        updatePrice: (state, { payload }) => {
            state.price = payload
        },
        updateItems: (state, { payload }) => {
            state.items = payload
        },
        updateQuantity: (state, { payload }) => {
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.name === payload.name ? { ...item, qty: +payload.value } : item
                )
            }
        },
        adjustQty: (state, { payload }) => {
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.name === payload.name) {
                        if (payload.type === 'increase') {
                            return { ...item, qty: item.qty + 1 }
                        } else if (payload.type === 'decrease' && item.qty !== 1) {
                            return { ...item, qty: item.qty - 1 }
                        }
                    }
                    return item
                })
            }
        },
        removeFromCart: (state, { payload }) => {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.name !== payload)
            }
        },
        getClothes: state => {
            state.loading = true
        },
        getClothesSuccess: (state, { payload }) => {
            state.products = payload
            state.loading = false
            state.hasErrors = false
        },
        getClothesFailure: state => {
            state.loading = false
            state.hasErrors = true
        }
    }
})

const { actions, reducer } = cartSlice

export const {
    addToCart,
    loadCart,
    updatePrice,
    getClothes,
    adjustQty,
    getClothesSuccess,
    getClothesFailure,
    updateQuantity,
    updateItems,
    removeFromCart,
    resetCart
} = actions

export const fetchRecipes = () => {
    return async dispatch => {
        dispatch(getClothes())
        try {
            const uri = process.env.REACT_APP_BASE_URL
            // const uri = 'http://localhost:6500'
            // console.log("ENV URI",process.env)
            // const { data } = await axios.get(`${uri}/api/cloth`)
            // console.log('DATA: ', data)
            dispatch(getClothesSuccess(jsonData))
        } catch (error) {
            dispatch(getClothesFailure())
        }
    }
}

export default reducer

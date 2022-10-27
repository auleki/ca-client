import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { loadClothes } from '../../services/api'

export const initialState = {
    loading: false,
    hasErrors: false,
    clothing: [],
}

let nextItemId = 0

const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        create: {
            reducer(state, { payload }) {
                const { id, name: cartItemName } = payload
                state.push({ id, name: cartItemName })
            },
            prepare(cartItemName) {
                return {
                    payload: {
                        name: cartItemName,
                        id: nextItemId++
                    }
                }
            }
        },
        getClothes: state => {
            state.loading = true
        },
        getClothesSuccess: (state, { payload }) => {
            state.clothing = payload
            state.loading = false
            state.hasErrors = false
        },
        getClothesFailure: state => {
            state.loading = false
            state.hasErrors = true
        }
    }
})

const { actions, reducer } = productsSlice

export const {
    create,
    getClothes,
    getClothesSuccess,
    getClothesFailure
} = actions

export const fetchRecipes = () => {
    return dispatch => {
        dispatch(getClothes())
        try {
            console.log('Looking for clothes')
            const data = loadClothes()
            dispatch(getClothesSuccess(data))
        } catch (error) {
            dispatch(getClothesFailure())
        }
    }
}


export default reducer
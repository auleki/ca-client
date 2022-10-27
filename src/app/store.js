import { configureStore } from "@reduxjs/toolkit";

// import { ThunkAction } from 'redux-thunk';
// import rootReducer from './rootReducer'
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
    // reducer: rootReducer
    reducer: cartReducer
})

// export const AppDispatch = typeof store.dispatch

// export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store
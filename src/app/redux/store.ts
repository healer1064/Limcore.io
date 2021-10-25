import { configureStore } from '@reduxjs/toolkit'
import salesPlanSlice from '../../pages/home/redux/salesPlanSlicer'
import profileSlice from '../../pages/home/redux/profileSlicer'
import orderSlice from '../../pages/orders/redux/orderSlicer'
import detailOrderInfoSlice from '../../pages/orders/redux/detailOrderSlicer'
import catalogSlice from '../../pages/catalog/redux/catalogSlicer'
import userSlice from './userSlice'
import cabinetSlice from '../../pages/cabinet/redux/cabinetSlice'
import authSlice from '../../pages/auth/redux/auth.slice'

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    salesPlan: salesPlanSlice,
    orders: orderSlice,
    detailOrderInfo: detailOrderInfoSlice,
    catalogList: catalogSlice,
    user: userSlice,
    cabinet: cabinetSlice,
    auth: authSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import salesPlanSlice from '../../pages/home/redux/salesPlanSlicer'
import profileSlice from '../../pages/home/redux/profileSlicer'
import orderSlice from '../../pages/orders/redux/orderSlicer'
import detailOrderInfoSlice from '../../pages/orders/redux/detailOrderSlicer'
import catalogSlice from '../../pages/catalog/redux/catalogSlicer'
import userSlice from './userSlice'
import cabinetSlice from '../../pages/cabinet/redux/cabinetSlice'
import authSlice from '@app/redux/authSlice'
import walletSlice from '../../components/Wallet/redux/walletSlice'
import chatSlice from '@components/Chat/redux/chatSlice'
import appSlice from '@app/redux/reducers/appSlice'

export const store = configureStore({
  reducer: {
    app: appSlice,
    profile: profileSlice,
    salesPlan: salesPlanSlice,
    orders: orderSlice,
    detailOrderInfo: detailOrderInfoSlice,
    catalogList: catalogSlice,
    user: userSlice,
    cabinet: cabinetSlice,
    auth: authSlice,
    wallet: walletSlice,
    chat: chatSlice,
  },
  devTools: process.env.MODE !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

export const getOrders = createAsyncThunk('orders/getOrders', async (payload: any) => {
  const response = await api.post<any>(`order/filter/${payload.userId}`, payload.data)
  return response.data as any
})

export const downloadBill = createAsyncThunk('order/downloadBill', async (orderId: number) => {
  const response = await api.get(`order/${orderId}/downloadBill`)
  return response.data
})

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    status: null,
    sortedBy: null,
    filtered: [],
    sortArray: [],
    pagination: {
      number: 0,
      size: 10,
      totalElements: null,
      totalPages: null,
    },
    chekedObject: {},
  } as unknown as any,

  reducers: {
    sort: (state, action) => {
      state.sortArray = action.payload
    },
    changePageSize: (state, action) => {
      state.pagination.size = action.payload
    },
    pageChange: (state, action) => {
      state.pagination.number = action.payload
    },
    checkOrder: (state, action) => {
      console.log('check ->', action.payload)
    },
    filter: (state, action) => {
      state.filtered = action.payload
    },
    setCheckedObject: (state, action) => {
      state.chekedObject = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      state.orders = payload?.content || []
      state.pagination = payload?.pageMetadata
      state.status = 'success'
    })
  },
})

const { actions, reducer } = orderSlice
export const { sort, changePageSize, pageChange, filter, setCheckedObject } = actions
export default reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

export const getDetailOrderInfo = createAsyncThunk('orders/getDetailOrderInfo', async (id: number) => {
  const response = await api.get(`order/${id}`)
  return response.data as any
})

export const detailOrderInfoSlice = createSlice({
  name: 'detailOrderInfo',
  initialState: {
    id: null,
    isLoading: null,
    name: null,
    ddate: null,
    businessType: null,
    amount: null,
    status: null,
    agreement: {
      name: null,
      regions: [],
      salesChannel: null,
      partner: {
        name: null,
      },
    },
    accountNumber: {
      number: null,
      warehouse: null,
    },
    items: [],
    payment: null,
  },
  reducers: {
    clearItems: (state) => {
      state.items = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetailOrderInfo.pending, (state) => {
      state.isLoading = 'loading'
    })
    builder.addCase(getDetailOrderInfo.fulfilled, (state, { payload }) => {
      state.isLoading = 'success'
      state.id = payload?.id
      state.name = payload?.name
      state.ddate = payload?.ddate
      state.amount = payload?.amount
      state.agreement.salesChannel = payload?.agreement.salesChannel
      state.status = payload?.status
      state.status = payload?.status
      state.agreement.name = payload?.agreement.name
      state.agreement.regions = payload?.agreement.regions
      state.agreement.partner.name = payload?.agreement.partner.name
      state.accountNumber.number = payload?.accountNumber.number
      state.accountNumber.warehouse = payload?.accountNumber.warehouse
      state.businessType = payload?.businessType
      state.items = payload?.items
      state.payment = payload?.payment
    })
  },
})

const { actions, reducer } = detailOrderInfoSlice
export const { clearItems } = actions
export default reducer

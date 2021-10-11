import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '@app/api'
// import { apiTypes } from '@app/apiTypes'

export const getSalesPlan = createAsyncThunk('salesPlan/getSalesPlan', async (agreementName: string | undefined) => {
  // api.get<any> - вместо any - использовать созданный интерфейс из apiTypes.exampleInterface
  const response = await api.get<any>(`salesPlan/agreement/${agreementName}`)
  return response.data
})

export const salesPlanSlice = createSlice({
  name: 'salesPlan',
  initialState: {
    sales: null,
    totalSales: null,
    percent: null,
    status: null,
  } as any, // as any - вместо any - использовать созданный интерфейс из apiTypes.exampleInterface
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSalesPlan.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getSalesPlan.fulfilled, (state, { payload }) => {
      state.sales = payload.sales
      state.totalSales = payload.totalSales
      state.percent = payload.percent
      state.status = 'success'
    })
  },
})

export default salesPlanSlice.reducer

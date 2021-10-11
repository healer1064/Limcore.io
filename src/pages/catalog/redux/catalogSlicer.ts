import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

export enum CountType {
  increment = 'inc',
  decrement = 'dec',
}

interface CatalogPageData {
  isLoading: string | null
  items: any
}

export const getCatalogList = createAsyncThunk('orders/getCatalogList', async (accountNumber: string | number) => {
  const response = await api.get(`remain/accountNumber/${accountNumber}`)
  return response.data as any
})

export const catalogSlice = createSlice({
  name: 'catalogList',
  initialState: {
    isLoading: null,
    items: [],
  } as CatalogPageData,

  reducers: {
    parseItem: (state, action: any) => {
      const newItem = [...state.items]
      state.items = newItem.map((item) => {
        action.payload.map((el) => {
          if (item?.product?.code === el?.code) {
            item.selected = true
            item.countInOrder = el?.quantity
          } else {
            return item
          }
        })
        return item
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCatalogList.pending, (state) => {
      state.isLoading = 'loading'
    })
    builder.addCase(getCatalogList.fulfilled, (state, { payload }) => {
      state.isLoading = 'success'
      state.items =
        payload.map((item) => {
          item.selected = false
          item.countInOrder = 0
          return item
        }) || []
    })
  },
})

const { actions, reducer } = catalogSlice
export const { parseItem } = actions

export default reducer

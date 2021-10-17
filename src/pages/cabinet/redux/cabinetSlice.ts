import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'

export const cabinetSlice = createSlice({
  name: 'cabinetPage',
  initialState: {
    viewHeader: 'main',
    viewCabinet: 'profile',
    viewContent: 'profile',
    status: null,
    error: null,
  } as unknown as any,
  reducers: {
    changeViewHeader: (state, action) => {
      state.viewHeader = action.payload
    },
    changeViewCabinet: (state, action) => {
      state.viewCabinet = action.payload
    },
    changeViewContent: (state, action) => {
      state.viewContent = action.payload
    },
  },
  extraReducers: {
    // [getDoctorPageData.pending]: (state, action) => {
    //   state.status = 'loading'
    // },
  },
})

const { actions, reducer } = cabinetSlice

export const { changeViewHeader, changeViewCabinet, changeViewContent } = actions
export default reducer

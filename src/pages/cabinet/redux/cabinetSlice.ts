import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'

export const cabinetSlice = createSlice({
  name: 'cabinetPage',
  initialState: {
    viewHeader: 'main',
    viewCabinet: 'purse',
    viewContent: 'profile',
    status: null,
    error: null,
    step: 0,
  } as unknown as any,
  reducers: {
    completeProfile: (state) => {
      state.profileComplete = !state.profileComplete
    },
    changeViewCabinet: (state, action) => {
      state.viewCabinet = action.payload
    },
    changeViewContent: (state, action) => {
      state.viewContent = action.payload
    },
    changeStep: (state, action) => {
      state.step = action.payload
    },
  },
  extraReducers: {},
})

const { actions, reducer } = cabinetSlice

export const { completeProfile, changeViewCabinet, changeViewContent, changeStep } = actions
export default reducer

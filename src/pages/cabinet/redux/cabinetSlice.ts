import { createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'

export const cabinetSlice = createSlice({
  name: 'cabinetPage',
  initialState: {
    viewCabinet: 'profile',
    viewContent: 'profile',
    profileComplete: false,
    status: null,
    error: null,
    step: 0,
  } as unknown as any,
  reducers: {
    setProfileComplete: (state, action) => {
      state.profileComplete = action.payload
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

export const { setProfileComplete, changeViewCabinet, changeViewContent, changeStep } = actions
export default reducer

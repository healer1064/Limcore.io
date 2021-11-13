import { createSlice } from '@reduxjs/toolkit'

export const cabinetSlice = createSlice({
  name: 'cabinetPage',
  initialState: {
    profileComplete: false,
    viewContent: 'profile',
    status: null,
    error: null,
    step: 0,
  } as unknown as any,
  reducers: {
    setProfileComplete: (state, action) => {
      state.profileComplete = action.payload
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

export const { setProfileComplete, changeViewContent, changeStep } = actions
export default reducer

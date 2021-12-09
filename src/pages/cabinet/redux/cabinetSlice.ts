import { createSlice } from '@reduxjs/toolkit'

export const cabinetSlice = createSlice({
  name: 'cabinetPage',
  initialState: {
    profileComplete: false,
    viewContent: 'profile',
    viewPurseContent: 'main',
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
    changeViewPurseContent: (state, action) => {
      state.viewPurseContent = action.payload
    },
    changeStep: (state, action) => {
      state.step = action.payload
    },
  },
  extraReducers: {},
})

const { actions, reducer } = cabinetSlice

export const { setProfileComplete, changeViewContent, changeViewPurseContent, changeStep } = actions
export default reducer

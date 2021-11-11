import { createSlice } from '@reduxjs/toolkit'

export const cabinetSlice = createSlice({
  name: 'cabinetPage',
  initialState: {
    viewCabinet: 'profile',
    viewContent: 'profile',
    profileComplete: false,
    status: null,
    error: null,
    step: 0,
    language: 'ru',
    translation: null,
  } as unknown as any,
  reducers: {
    setProfileComplete: (state, action) => {
      state.profileComplete = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    setTranslation: (state, action) => {
      state.translation = action.payload
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

export const { setProfileComplete, changeViewCabinet, changeViewContent, changeStep, setLanguage, setTranslation } =
  actions
export default reducer

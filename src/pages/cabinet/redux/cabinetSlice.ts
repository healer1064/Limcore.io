import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'

export const cabinetSlice = createSlice({
  name: 'cabinetPage',
  initialState: {
    viewCabinet: 'profile',
    viewContent: 'filling',
    status: null,
    error: null,
  } as unknown as any,
  reducers: {
    changeView: (state, action) => {
      state.view = action.payload
    },
  },
  extraReducers: {
    // [getDoctorPageData.pending]: (state, action) => {
    //   state.status = 'loading'
    // },
  },
})

const { actions, reducer } = cabinetSlice

export const { changeView } = actions
export default reducer

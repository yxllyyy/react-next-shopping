import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from 'next-redux-wrapper'

export interface IHomeInitialState {
 counter: number;
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    counter: 10
  } as IHomeInitialState,
  reducers: {
    increment(state, { type, payload }) {
     state.counter += payload
    }
  },
  extraReducers: (builder) => {
    // Hydrate得操作，保证服务端和客户端数据的一致性
    builder.addCase(HYDRATE, (state, action: any) => {
      // state => initialState
      // action.payloa => rootState
      return {
        ...state,
        ...action.payload.home
      }
    })
  }
})

export const { increment } = homeSlice.actions
export default homeSlice.reducer

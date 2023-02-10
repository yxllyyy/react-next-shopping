import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper'
import { getSearchSuggest } from '../../services/home'
import type { ISearchSuggest } from '../../services/home'

export interface IHomeInitialState {
  counter: number;
  navbar: ISearchSuggest
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    counter: 10,
    navbar: {}
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
      .addCase(fetchSearchSuggest.fulfilled, (state, { payload }) => {
       state.navbar = payload
      })
  }
})

// 异步action
export const fetchSearchSuggest = createAsyncThunk("fetchSearchSuggest", async () => {
  const res = await getSearchSuggest() 
  return res.data
})

export const { increment } = homeSlice.actions
export default homeSlice.reducer

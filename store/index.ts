import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import homeReducer from './modules/home'
const store = configureStore({
  reducer: {
   home: homeReducer,
  }
})

const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper

// 这个是dispatch函数的类型
export type IAppDispatch = typeof store.dispatch
// rootState的类型
export type IAppRootState = ReturnType<typeof store.getState>
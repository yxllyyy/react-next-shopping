import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getSearchSuggest } from 'services/home'
import wrapper from '@/store/index'
import { fetchSearchSuggest } from '@/store/modules/home'

export default function Home() {
  return (
    <>
    <Head>
      <title>云音乐 - 商城</title>
    </Head>
    <div className="home">
     hello world
    </div>
    </>
  )
}

// 每次访问首页时就会执行该函数
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(function (store) {
  return async (context) => {
    // 1.触发一个异步的action来发起网络请求
    await store.dispatch(fetchSearchSuggest())
    return {
     props: {}
    }
  }
})
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import wrapper from '@/store/index'
import { getHomeInfo, getSearchSuggest } from 'services/home'
import { fetchSearchSuggest } from '@/store/modules/home'
import styles from './index.module.scss'
import type { FC } from 'react'
import type { IBanner, ICategory, IRecommend } from '../services/home'
import TopSwiper from '@/components/top-swiper'

interface IProps {
  banners: IBanner[]
  categorys: ICategory[]
  recommended: IRecommend[]
  digitialData: any[]
}

const Home: FC<IProps> = (props) => {
  const { banners, categorys, recommended, digitialData } = props
  return (
    <>
    <Head>
      <title>云音乐 - 商城</title>
    </Head>
    <div className={styles.home}>
        <TopSwiper banners={ banners } />
     </div>
    </>
  )
}

export default Home

// 每次访问首页时就会执行该函数
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(function (store) {
  return async (context) => {
    // 1.触发一个异步的action来发起网络请求
    await store.dispatch(fetchSearchSuggest())
    // 获取首页的数据
    const res = await getHomeInfo()
    return {
     props: {
        banners: res.data.banners || [],
        categorys: res.data.categorys || [],
        recommends: res.data.recommends || [],
        digitalData: res.data.digitalData || []
      }
    }
  }
})
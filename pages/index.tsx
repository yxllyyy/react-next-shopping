import { GetServerSideProps } from 'next'
import Head from 'next/head'
import wrapper from '@/store/index'
import { getHomeInfo, getSearchSuggest, getHotproduct_v2, getAllProduct } from 'services/home'
import { fetchSearchSuggest } from '@/store/modules/home'
import styles from './index.module.scss'
import TopSwiper from '@/components/top-swiper'
import TabCategory from '@/components/tab-category'
import Recommend from '@/components/recommend'
import classNames from 'classnames'

import type { FC } from 'react'
import type { IBanner, ICategory, IRecommend, IHotProduct, IAllProduct } from '../services/home'
import SectionTitle from '@/components/section-title'
import GridView from '@/components/grid-view'

interface IProps {
  banners: IBanner[]
  categorys: ICategory[]
  recommends: IRecommend[]
  digitialData: any[]

  hotProducts: IHotProduct[]
  allProducts: IAllProduct[]
}

const Home: FC<IProps> = (props) => {
  const {
    banners = [],
    categorys = [],
    recommends = [],
    digitialData = [],
    hotProducts = [],
    allProducts = []
  } = props
  return (
    <>
    <Head>
      <title>云音乐 - 商城</title>
    </Head>
    <div className={styles.home}>
        <TopSwiper banners={banners} />
        <TabCategory categorys={categorys} />
        <Recommend recommends={recommends} />
        <div className={classNames("wrapper", styles.content)}>
          <SectionTitle title='编辑推荐' />
          <GridView products={hotProducts}  />
          <SectionTitle title='热门精选' />
           <GridView products={allProducts}  />
        </div>
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
    // 2. 获取首页的数据
    const res = await getHomeInfo()
    // 3.发起网络请求获取首页的. 编辑推荐的商品
    const resHot = await getHotproduct_v2()
    // 4.发起网络请求获取首页的. 热门的商品
    const resAll = await getAllProduct()
    return {
     props: {
        banners: res.data.banners || [],
        categorys: res.data.categorys || [],
        recommends: res.data.recommends || [],
        digitalData: res.data.digitalData || [],

        hotProducts: resHot.data.hotProduct || [],
        allProducts: resAll.data.allProduct || []
      }
    }
  }
})
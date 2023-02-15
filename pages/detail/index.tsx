import { memo } from "react"
import classNames from "classnames"
import wrapper from '@/store/index'
import { fetchSearchSuggest } from '@/store/modules/home'
import { getDetailPageInfo, IDetailPageInfo } from 'services/detail'
import styles from './index.module.scss'
import type { FC, ReactElement } from 'react'
import type { GetServerSideProps } from 'next'
import Link from "next/link"
import Image from "next/image"
import GridView from "@/components/grid-view"

export interface IProps {
  children?: ReactElement
  detailData?: any
}

const Detail: FC<IProps> = function (props) {
  const { children, detailData = [] } = props
  return (
    <div className={styles.detail}>
      <div className={classNames("wrapper", styles.content)}>
        {/* 图片 */}
        <div className={styles.banner}>
          <Link href={"/"}>
            <Image
              className={styles.image}
              src={detailData?.webPic!}
              alt="耳机"
              fill/>
          </Link>
        </div>

        {/* 商品列表 */}
        <GridView products={detailData.products}/>
      </div>
    </div>
  )
}

export default memo(Detail)
Detail.displayName = "Detail"

//ssr
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(function(store) {
  return async (context) => {
    // 1.触发一个异步的action来发起网络请求
    await store.dispatch(fetchSearchSuggest())
    // 2. 拿到详情页得数据
    const { id } = context.query
    const res = await getDetailPageInfo(id as string)
    return {
     props: {
        detailData: res.data
      }
    }
  }
})
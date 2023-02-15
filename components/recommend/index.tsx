import { memo } from "react"
import type { FC, ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Col, Row } from 'antd';
import classNames from "classnames"
import styles from './index.module.scss'
import type { IRecommend } from '../../services/home'

export interface IProps {
  children?: ReactElement
  recommends?: IRecommend[]
}

const Recommend: FC<IProps> = function (props) {
  const { children, recommends = [] } = props
  return (
    <div className={styles.recommend}>
      <div className={classNames("wrapper", styles.content)}>
      <Row>
            {
            recommends.map((Recommend) => {
              return (
               <Col key={Recommend.id} span={12}>
                  <Link href={"/detail?id=" + Recommend.id} className={styles["recommend-item"]}>
                    <Image
                      className={styles.image}
                      src={Recommend.picStr!}
                      alt="recommend"
                      width={542}
                      height={300} />
                  </Link>
                </Col>
             )
            })
            }
      </Row>
      </div>
    </div>
  )
}

export default memo(Recommend)
Recommend.displayName = "Recommend"
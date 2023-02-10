import { memo } from "react"
import type { FC, ReactElement } from 'react'
import styles from "./index.module.scss"
import classNames from "classnames"
import Link from "next/link"
import Search from '../search'

export interface IProps {
 children?: ReactElement
}

const NavBar: FC<IProps> = function (props) {
  const { children } = props
  return (
    <div className={ styles.navbar }>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles['content-left']}>
          <Link href="/" className={styles.logo} />
          <h1 className={styles.title}>云音乐商城 - 音乐购有趣</h1>
        </div>
        <div className={styles['content-right']}>
          <Search />
          <div className={styles['right-cart']}>
            <Link href="/" className={styles.cart}>
              <span className={styles.count}>0</span>
            </Link>
          </div>
          <div className={styles['right-login']}></div>
        </div>
      </div>
    </div>
  )
}

export default memo(NavBar)
NavBar.displayName = "NavBar"
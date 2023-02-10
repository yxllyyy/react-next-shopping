import React, { memo, useState } from "react"
import type { FC, ReactElement } from 'react'
import classNames from "classnames"
import styles from './index.module.scss'
import type { ISearchSuggest } from "services/home"

export interface IProps {
  children?: ReactElement
  searchData: ISearchSuggest
}

const Search: FC<IProps> = function (props) {
  const { children, searchData } = props
  const [inputFocus, setInputFocus] = useState(false)

  const handleKeyDown = (event:  React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputTarget = event.target as HTMLInputElement
      console.log(inputTarget.value)
    }
  }

  function handleInputFocus(isFocus: boolean) {
    setInputFocus(isFocus)
  }
  return (
    <div className={styles.search}>
      {/* 搜索框 */}
      <div className={styles["search-bg"]}>
        <input className={styles.input} type="text"
          placeholder="蓝牙耳机"
          onFocus={() => handleInputFocus(true)}
          onBlur={() => handleInputFocus(false)}
          onKeyDown = { handleKeyDown }
        />
      </div>

      {/* 下拉面板 */}
      <div className={classNames(styles["search-panel"], inputFocus ? styles.show : styles.hide)}>
        <div className={styles.shadow}></div>
          <h2>热门搜索</h2>
          <ul>
           {
           searchData?.configKey && searchData?.configKey.map((item, index) => {
             return <li key={item[index + 1]}>{ item[index + 1] }</li>
           })
          }
          </ul>
      </div>
    </div>
  )
}

export default memo(Search)
Search.displayName = "Search"
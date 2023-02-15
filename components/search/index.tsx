import React, { memo, useState } from "react"
import type { FC, ReactElement } from 'react'
import classNames from "classnames"
import styles from './index.module.scss'
import type { ISearchSuggest } from "services/home"
import { useRouter } from "next/router"

export interface IProps {
  children?: ReactElement
  searchData: ISearchSuggest
}

const Search: FC<IProps> = function (props) {
  const { children, searchData } = props
  const router = useRouter()
  const [inputFocus, setInputFocus] = useState<boolean>(false)
  const [placeholder, setPlaceholder] = useState<string>("蓝牙耳机")

  const handleKeyDown = (event:  React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputTarget = event.target as HTMLInputElement
      goToSearchPage(inputTarget.value)
      setInputFocus(false)
    }
  }

  function handleInputFocus(isFocus: boolean) {
    setInputFocus(isFocus)
  }

  function handleItemClick(name: string) {
    setPlaceholder(name)
    goToSearchPage(name)
  }

  function goToSearchPage(name: string) {
    router.push({
      pathname: '/search',
      query: {
       VideoPlaybackQuality: name
      }
    })
  }
  return (
    <div className={styles.search}>
      {/* 搜索框 */}
      <div className={styles["search-bg"]}>
        <input className={styles.input} type="text"
          placeholder={placeholder}
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
             return <li key={item[index + 1]}onMouseDown={() => handleItemClick(item[index + 1])} >{ item[index + 1] }</li>
           })
          }
          </ul>
      </div>
    </div>
  )
}

export default memo(Search)
Search.displayName = "Search"
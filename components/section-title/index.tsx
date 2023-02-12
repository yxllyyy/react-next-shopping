import { memo } from "react"
import type { FC, ReactElement } from 'react'
import styles from './index.module.scss'

export interface IProps {
  children?: ReactElement
  title?: string
}

const SectionTitle: FC<IProps> = function (props) {
  const { children, title } = props
  return (
    <div className={styles["section-title"]}>
      {title}
    </div>
  )
}

export default memo(SectionTitle)
SectionTitle.displayName = "SectionTitle"
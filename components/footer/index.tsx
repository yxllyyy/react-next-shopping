import { memo } from "react"
import type { FC, ReactElement } from 'react'

export interface IProps {
 children: ReactElement
}

const Footer: FC<IProps> = function (props) {
  const { children } = props
  return (
    <div className="Footer">
      <h2>Footer</h2>
    </div>
  )
}

export default memo(Footer)
Footer.displayName = "Footer"
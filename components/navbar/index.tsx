import { memo } from "react"
import type { FC, ReactElement } from 'react'

export interface IProps {
 children: ReactElement
}

const NavBar: FC<IProps> = function (props) {
  const { children } = props
  return (
    <div className="NavBar">
      <h2>NavBar</h2>
    </div>
  )
}

export default memo(NavBar)
NavBar.displayName = "NavBar"
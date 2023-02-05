import { memo } from "react"
import NavBar from '../navbar'
import Footer from '../footer'
import type { FC, ReactElement } from 'react'

export interface IProps {
 children: ReactElement
}

const Layout: FC<IProps> = function (props) {
  const { children } = props
  return (
    <div className="Layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default memo(Layout)
Layout.displayName = "Layout"
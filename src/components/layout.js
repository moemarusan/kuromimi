import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link className="blog-title" to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="blog-title" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div class="wrap">
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
      ©︎moemarusan
      </footer>
      </div>
    </div>
  )
}

export default Layout

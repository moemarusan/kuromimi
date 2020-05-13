import React from "react";
import { Link } from "gatsby";
import '../styles/index.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
          {title}
      </h1>
    )
  } else {
    header = (
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
          className="blog-title"
        >
          ← {title}
        </Link>
    )
  }
  return (
    <div className="wrap">
      <header className="top">{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout

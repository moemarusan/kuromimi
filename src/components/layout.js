import React from "react";
import { Link } from "gatsby";
import '../styles/index.scss';

const Layout = ({ location, title, children }) => {
  let header = (
      <Link
          to={`/`}
          className="blog-title"
        >
          {title}
        </Link>
    )
    
  return (
    <div className="wrap">
      <header className="top">{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout

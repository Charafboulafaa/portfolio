import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="py-3 flex justify-between">
    <div>
      <h1 className="font-bold">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>

    <div className="flex">
      <h2 className="mx-1">About</h2>
      <h2 className="mx-1">Portfolio</h2>
      <h2 className="mx-1">Contact</h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

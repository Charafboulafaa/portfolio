import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = ({ siteTitle }) => (
  <header className="py-3 flex justify-between">
    <div>
      {/* <h1 className="font-bold">
        <Link to="/">{siteTitle}</Link>
      </h1> */}
    </div>

    <div className="flex">
      <button onClick={()=> scrollTo('#about')} className="mx-2">About</button>
      <button onClick={()=> scrollTo('#portfolio')} className="mx-2">Portfolio</button>
      <button onClick={()=> scrollTo('#contact')} className="mx-2">Contact</button>
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = ({ siteTitle }) => (
  <header className="shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between text-base font-semibold">
      <div>
        {/* <h1 className="font-bold">
          <Link to="/">{siteTitle}</Link>
        </h1> */}
      </div>

      <div className="flex">
        <button onClick={()=> scrollTo('#about')} className="mx-2">About</button>
        <button onClick={()=> scrollTo('#projects')} className="mx-2">Projects</button>
        <button onClick={()=> scrollTo('#contact')} className="mx-2">Contact</button>
      </div>
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

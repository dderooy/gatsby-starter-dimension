import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">like this code?</p>
    <a
      href="https://github.com/dderooy/website-business-card"
      className="icon fa-code-fork"
    >
      <span className="label">GitHub</span>
    </a>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer

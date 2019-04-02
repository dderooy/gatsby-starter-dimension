import React from 'react'
import PropTypes from 'prop-types'
import AboutPic from '../images/about.jpg'

class Main extends React.Component {

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>

          <div className="grid-container">
            <div className="grid-item">
              <ul className="actions vertical">
                <li>
                  <h3>Frontend:</h3>
                  <span className="icon fa-laptop" />
                  <span className="icon fa-mobile" />
                </li>
                <li>
                  <p>React &nbsp; || &nbsp; Core JS</p>
                </li>
                <li>
                  <p>Styled Components &nbsp; || &nbsp; Sass</p>
                </li>
              </ul>
            </div>
            <div className="grid-item">
              <ul className="actions vertical">
                <li>
                  <h3>Backend:</h3>
                  <span className="icon fa-server" />
                </li>
                <li>
                  <p>Java + Spring Boot</p>
                </li>
                <li>
                  <p>Node + Express</p>
                </li>
                <li>
                  <p>REST &nbsp; || &nbsp; SOAP &nbsp; || &nbsp; GraphQL</p>
                </li>
              </ul>
            </div>
            <div className="grid-item">
              <ul className="actions vertical">
                <li>
                  <h3>DevOps:</h3>
                  <span className="icon fa-cloud" />
                  <span className="icon fa-terminal" />
                </li>
                <li>
                  <p>Git &nbsp; || &nbsp; SVN</p>
                </li>
                <li>
                  <p>Docker</p>
                </li>
                <li>
                  <p>CI + Jenkins</p>
                </li>
                <li>
                  <p>Jira &nbsp; || &nbsp; Trello</p>
                </li>
              </ul>
            </div>
            <div className="grid-item">
              <ul className="actions vertical">
                <li>
                  <h3>Databases:</h3>
                  <span className="icon fa-database" />
                </li>
                <li>
                  <p>MySQL</p>
                </li>
                <li>
                  <p>PostgreSQL</p>
                </li>
              </ul>
            </div>
          </div>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image left">
            <img src={AboutPic} alt="" />
          </span>
          <p>
            In 2017 David graduated from Systems Design Engineering at Waterloo.
            Over the course of his career so far, David has worked for both
            startup and corporate enterprises.{' '}
          </p>
          <p>
            David is passionate about learning from others, and values team
            relationships. He likes to know the big picture, and keeps an eye on
            the final project outcome.{' '}
          </p>
          <p>"The value of an idea lies in the using of it" - Thomas Edison.</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action=""
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://github.com/dderooy" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="success"
          className={`${this.props.article === 'success' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">
            Thanks for reaching out! <span className="icon fa-thumbs-o-up" />
          </h2>
          <p>
            Replies will be sent at earliest convenience 
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function validEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export default class NetlifyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { emailError: false }
  }

  handleChange = e => {
    let formData = { ...this.state.formData }
    formData[e.target.name] = e.target.value
    this.setState({ emailError: false , formData })
  }

  handleSubmit = e => {
    e.preventDefault()
    validEmail(this.state.formData.email) === false
      ? this.setState({ emailError: true })
      : this.sendForm(e)
  }

  sendForm = e => {
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state.formData,
      }),
    })
      .then(() => this.props.onChangeArticle('success'))
      .then(() => setTimeout(navigate(form.getAttribute('action')), 5000))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <label
            htmlFor="emailError"
            className="error"
            style={!this.state.emailError ? { display: 'none' } : {}}
          >
            : Invalid Format
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            onChange={this.handleChange}
            required
          />
        </div>
        <ul className="actions">
          <li>
            <input
              type="submit"
              value="Send Message"
              name="submit"
              className="special"
            />
          </li>
          <li>
            <input type="reset" value="Reset" name="reset" />
          </li>
        </ul>
      </form>
    )
  }
}

NetlifyForm.propTypes = {
  onChangeArticle: PropTypes.func,
}

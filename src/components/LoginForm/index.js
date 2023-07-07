// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', warnText: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else if (username === '') {
      this.setState({warnText: "*Username didn't match"})
    } else if (password === '') {
      this.setState({warnText: "*Password didn't match"})
    } else {
      this.setState({warnText: "*Username and Password didn't match"})
    }
  }

  render() {
    const {username, password, warnText} = this.state

    return (
      <div className="full-page-container">
        <div className="nxt-trendz-page">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="web-login-img"
          />
          <div className="login-container">
            <form className="form-container" onSubmit={this.onLogin}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="web-logo-img"
              />
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                value={username}
                className="input"
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                value={password}
                className="input"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
              <button type="submit" className="login-btn">
                Login
              </button>
              <p className="warn">{warnText}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm

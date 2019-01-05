import React, { Component } from 'react';
import { register } from '../service';
import Footer from './Footer';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  handleRegister = e => {
    e.preventDefault();

    register(this.state.user, this.props.history);
  }

  handleChange = e => {
    const { user } = this.state;

    let field = e.target.name;
    user[field] = e.target.value;

    this.setState({ user });
  }

  render() {
    return (
      <div className="uk-height-1-1">
        <div className="uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport">

          <Footer />

          <div className="uk-width-medium uk-padding-small">
            <form onChange={this.handleChange}>
              <fieldset className="uk-fieldset">
                <legend className="uk-legend">Register</legend>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
                    <input className="uk-input uk-form-large" required name="name" placeholder="Name" type="text" />
                  </div>
                </div>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
                    <input className="uk-input uk-form-large" required name="email" placeholder="Email" type="email" />
                  </div>
                </div>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                    <input className="uk-input uk-form-large" required name="password" placeholder="Password" type="password" />
                  </div>
                </div>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                    <input className="uk-input uk-form-large" required name="confirmPassword" placeholder="Confirm Password" type="password" />
                  </div>
                </div>

                <div className="uk-margin">
                  <button type="submit" className="uk-button uk-button-primary uk-button-primary uk-button-large uk-width-1-1" onClick={this.handleRegister}>REGISTER</button>
                </div>
              </fieldset>
            </form>
            <div>
              <div className="uk-text-center">
                <a className="uk-link-reset uk-text-small" href="/login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;